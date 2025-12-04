import { NextResponse } from "next/server";
import { getAzureToken, getOboToken } from "@/lib/auth";
import { logger } from "@/app/api/logger";

export const revalidate = 0;

export async function GET(request: Request) {
  const token = await getAzureToken(request);

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);

  const url = new URL(
    process.env.API_BASE_URL || "http://dp-aktivitetslogg/aktivitetslogg",
  );
  url.search = searchParams.toString();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${await getOboToken(token)}`,
    },
  });
  logger.info(`response status: ${response.status}`);
  logger.info(`response url: ${response.url}`);
  const s = await response.json();
  logger.info(`response json: ${JSON.stringify(s)}`);

  return NextResponse.json(s);
}
