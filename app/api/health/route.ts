import { NextResponse } from "next/server";

// Evaluated on every request — never statically cached at build time.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "locra-app",
      timestamp: new Date().toISOString(),
      uptime: Math.round(process.uptime()),
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
