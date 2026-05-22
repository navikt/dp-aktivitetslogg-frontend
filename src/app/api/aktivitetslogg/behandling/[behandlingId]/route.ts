import { NextResponse } from "next/server";
import { getAzureToken, getOboToken } from "@/lib/auth";
import { logger } from "@/app/api/logger";

export const revalidate = 0;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ behandlingId: string }> },
) {
  const { behandlingId } = await params;

  if (process.env.IS_LOCALHOST === "true" && !process.env.API_BASE_URL) {
    return NextResponse.json([]);
  }

  const token = await getAzureToken(request);
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const oboToken = await getOboToken(token);
  if (!oboToken)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const baseUrl =
    process.env.API_BASE_URL || "http://dp-aktivitetslogg/aktivitetslogg";
  const url = `${baseUrl}/behandling/${behandlingId}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${oboToken}` },
  });

  if (!response.ok) {
    logger.error(
      `Behandling lookup failed: ${response.status} for ${behandlingId}`,
    );
    return NextResponse.json([], { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
