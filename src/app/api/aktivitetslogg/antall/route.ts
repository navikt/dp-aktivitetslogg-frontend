import { NextResponse } from "next/server";
import { getAktivitetsloggOboToken, getAzureSession } from "@/lib/auth";

export const revalidate = 0;

export async function GET(request: Request) {
  const session = await getAzureSession(request);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(
    process.env.API_BASE_URL || "http://dp-aktivitetslogg/aktivitetslogg",
  );
  url.pathname = `${url.pathname}/antall`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${await getAktivitetsloggOboToken(session)}`,
    },
  });

  return NextResponse.json(await response.json());
}
