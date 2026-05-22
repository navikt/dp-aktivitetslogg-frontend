import { NextResponse } from "next/server";
import { getAzureToken, getOboToken } from "@/lib/auth";
import { logger } from "@/app/api/logger";
import { getMockData } from "@/app/api/mocks/aktivitetslogg/data";

export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (process.env.IS_LOCALHOST === "true" && !process.env.API_BASE_URL) {
    if (searchParams.get("since")) return NextResponse.json([]);
    return NextResponse.json(getMockData());
  }

  const token = await getAzureToken(request);

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(
    process.env.API_BASE_URL || "http://dp-aktivitetslogg/aktivitetslogg",
  );
  url.search = searchParams.toString();
  const oboToken = await getOboToken(token);
  if (!oboToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
    },
  });
  logger.info(`response status: ${response.status}`);
  logger.info(`response url: ${response.url}`);
  const s = await response.json();
  logger.info(`response json: ${JSON.stringify(s)}`);

  return NextResponse.json(s);
}
