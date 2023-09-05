import { getAzureSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getAzureSession(request);
  const isDev = process.env.NAIS_CLUSTER_NAME?.startsWith("dev-");
  if (!session || !isDev) return NextResponse.json({}, { status: 401 });

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-aktivitetslogg/.default`;
  const oboToken = await session.apiToken(audience);

  return new Response(
    "NEXT_PUBLIC_API_PATH=/api\n" +
      "IS_LOCALHOST=true\n" +
      `DP_AKTIVITETSLOGG_TOKEN=${oboToken}\n` +
      "API_BASE_URL=http://localhost:8081/aktivitetslogg\n" +
      "NAIS_CLUSTER_NAME=dev-gcp",
    { status: 200 },
  );
}
