import { getAzureToken } from "@/lib/auth";
import { requestOboToken } from "@navikt/oasis";

export async function authorizeUser(request: Request): Promise<object> {
  const token = await getAzureToken(request);

  if (!token) {
    return {
      givenName: "Skogs",
      surname: "Matrosen",
    };
  }

  try {
    const oboToken = await requestOboToken(
      token,
      "https://graph.microsoft.com/.default",
    );
    const data = await fetch(
      "https://graph.microsoft.com/v1.0/me/?$select=givenName,surname",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${oboToken}`,
        },
      },
    );

    return await data.json();
  } catch (e) {
    throw new Response("Unauthorized", { status: 401 });
  }
}
