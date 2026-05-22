import { NextResponse } from "next/server";
import { getMockData } from "./data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("since")) return NextResponse.json([]);

  return NextResponse.json(getMockData());
}
