import {
  getToken,
  requestOboToken,
  TokenResult,
  validateAzureToken,
} from "@navikt/oasis";

const fallbackToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export let getAzureToken = async (request: Request): Promise<string | null> => {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_AKTIVITETSLOGG_TOKEN || fallbackToken;
  }

  const token = getToken(request);
  if (!token) {
    return null;
  }
  const valid = await validateAzureToken(token);
  if (!valid.ok) {
    return null;
  }
  return token;
};

export async function getOboToken(
  token: string,
  audience?: string,
): Promise<TokenResult> {
  if (process.env.IS_LOCALHOST === "true") {
    return {
      ok: true,
      token: process.env.DP_AKTIVITETSLOGG_TOKEN || fallbackToken,
    };
  }
  if (audience) {
    return await requestOboToken(token, audience);
  }
  const aktivitetsloggAudience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-aktivitetslogg/.default`;
  const oboToken = await requestOboToken(token, aktivitetsloggAudience);
  return oboToken;
}
