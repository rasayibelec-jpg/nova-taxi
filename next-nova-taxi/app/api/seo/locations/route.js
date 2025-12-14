import { NextResponse } from "next/server";
import { locations } from "@/config/locations";

export function GET() {
  return NextResponse.json({
    locations: Object.entries(locations).map(([slug, data]) => ({
      slug,
      title: data.title,
      description: data.metaDescription,
      h1: data.h1
    }))
  });
}
