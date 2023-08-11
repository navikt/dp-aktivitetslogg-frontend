import { NextResponse } from "next/server";
import { getAktivitetsloggOboToken, getAzureSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log("route handler", process.env);
  const session = await getAzureSession(request);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);

  const url = new URL("http://dp-aktivitetslogg/aktivitetslogg");
  url.search = searchParams.toString();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${await getAktivitetsloggOboToken(session)}`,
    },
  });

  return NextResponse.json(await response.json());
}
