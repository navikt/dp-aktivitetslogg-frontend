import { NextResponse } from "next/server";
import { getOboToken, getAzureToken } from "@/lib/auth";

export const revalidate = 0;

export async function GET(request: Request) {
  const token = await getAzureToken(request);

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(
    process.env.API_BASE_URL || "http://dp-aktivitetslogg/aktivitetslogg",
  );
  url.pathname = `${url.pathname}/tjenester`;
  const oboToken = await getOboToken(token);
  if (!oboToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
    },
  });

  return NextResponse.json(await response.json());
}
