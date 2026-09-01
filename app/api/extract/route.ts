import { NextRequest, NextResponse } from "next/server";

export interface PlaceLocation {
  name: string;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  location_type?: string | null;
  confidence: number;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  place_id?: string | null;
  verified: boolean;
  sources?: string[];
  confidence_breakdown?: {
    caption?: number;
    ocr?: number;
    speech?: number;
    vision?: number;
    url_metadata?: number;
    google_places?: number;
    final?: number;
  };
}

export interface ExtractionResponse {
  status: "success" | "requires_more_data" | "error";
  destination?: string | null;
  places: PlaceLocation[];
  reason?: string | null;
  execution_time_seconds?: number;
  error?: string | null;
  isAuthError?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const content = (body.content || body.url || body.text || "").trim();
    const context = body.context || "";

    if (!content) {
      return NextResponse.json(
        {
          status: "error",
          places: [],
          error: "Please provide a valid Instagram Reel URL, TikTok URL, or text description.",
        },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.TRAVEL_AI_API_KEY ||
      process.env.TRAVEL_API_KEY ||
      process.env.X_API_KEY ||
      "";

    const apiUrl =
      process.env.TRAVEL_AI_API_URL || "https://travel-api.codesec.me";

    // Determine source_type according to api.md specification
    let sourceType = body.source_type || "video_url";
    if (!body.source_type) {
      if (content.startsWith("http://") || content.startsWith("https://")) {
        const lower = content.toLowerCase();
        if (
          lower.endsWith(".jpg") ||
          lower.endsWith(".jpeg") ||
          lower.endsWith(".png") ||
          lower.endsWith(".webp")
        ) {
          sourceType = "image_url";
        } else {
          sourceType = "video_url";
        }
      } else {
        sourceType = "text";
      }
    }

    // Check if API key is present
    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          places: [],
          isAuthError: true,
          error:
            "Missing TRAVEL_AI_API_KEY in environment variables. Please add TRAVEL_AI_API_KEY to your .env file.",
        },
        { status: 401 }
      );
    }

    const payload = {
      source_type: sourceType,
      content: content,
      context: context || undefined,
    };

    const upstreamResponse = await fetch(`${apiUrl}/extract/universal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (upstreamResponse.status === 401) {
      return NextResponse.json(
        {
          status: "error",
          places: [],
          isAuthError: true,
          error:
            "Invalid TRAVEL_AI_API_KEY provided. Please check your key in .env file.",
        },
        { status: 401 }
      );
    }

    if (!upstreamResponse.ok) {
      const errText = await upstreamResponse.text();
      let errMsg = `Upstream extraction service returned HTTP ${upstreamResponse.status}`;
      try {
        const parsed = JSON.parse(errText);
        if (parsed.detail || parsed.message || parsed.error) {
          errMsg = parsed.detail || parsed.message || parsed.error;
        }
      } catch {
        // use default errMsg
      }

      return NextResponse.json(
        {
          status: "error",
          places: [],
          error: errMsg,
        },
        { status: upstreamResponse.status }
      );
    }

    const data = await upstreamResponse.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Extraction error:", error);
    return NextResponse.json(
      {
        status: "error",
        places: [],
        error:
          error?.message ||
          "Failed to connect to Travel AI Extractor service. Please check your network and API URL.",
      },
      { status: 500 }
    );
  }
}
