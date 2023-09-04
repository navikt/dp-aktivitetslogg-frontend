import { getAzureSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getAzureSession(request);
  const isDev = process.env.NAIS_CLUSTER_NAME?.startsWith("dev-");
  if (!session || !isDev) return NextResponse.json({}, { status: 401 });
  return NextResponse.json(session.token, { status: 200 });
}
