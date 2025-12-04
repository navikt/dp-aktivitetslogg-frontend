import { getToken, requestOboToken, validateAzureToken } from "@navikt/oasis";

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
): Promise<string | null> {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_AKTIVITETSLOGG_TOKEN || fallbackToken;
  }
  if (audience) {
    const oboTokenResult = await requestOboToken(token, audience);
    if (!oboTokenResult.ok) {
      return null;
    }
    return oboTokenResult.token;
  }
  const aktivitetsloggAudience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-aktivitetslogg/.default`;
  const oboTokenResult = await requestOboToken(token, aktivitetsloggAudience);
  if (!oboTokenResult.ok) {
    return null;
  }
  return oboTokenResult.token;
}
