import type { NextApiRequest, NextApiResponse } from "next";
import { getAzureSession } from "@/lib/auth";

async function tokenHandler(req: NextApiRequest, res: NextApiResponse<string>) {
  const session = await getAzureSession(req);
  const isDev = process.env.NAIS_CLUSTER_NAME?.startsWith("dev-");
  if (!session || !isDev) return res.status(401).end();
  res.status(200).send(session.token);
}

export default tokenHandler;
