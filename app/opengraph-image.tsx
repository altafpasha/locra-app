import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Locra AI — Turn Travel Inspiration Into Your Next Trip";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070709",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255,138,61,0.28)",
            filter: "blur(90px)",
          }}
        />

        {/* Top Brand Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#FF8A3D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#070709",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            🧭
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: "900",
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
              }}
            >
              Locra
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "rgba(255,138,61,0.18)",
                color: "#FF8A3D",
                padding: "4px 10px",
                borderRadius: "8px",
                border: "1px solid rgba(255,138,61,0.4)",
              }}
            >
              AI
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Turn Instagram Reels into Real Trips{" "}
            <span style={{ color: "#FF8A3D" }}>in seconds.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.4,
            }}
          >
            The collaborative, AI-native travel planner that extracts verified places from reels, builds day-by-day itineraries, and splits group expenses.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              color: "rgba(255,255,255,0.8)",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            <span>📱 iOS & Android</span>
            <span>📍 Google Places Verified</span>
            <span>✨ AI Itineraries</span>
          </div>
          <div
            style={{
              color: "#FF8A3D",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            locra.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
