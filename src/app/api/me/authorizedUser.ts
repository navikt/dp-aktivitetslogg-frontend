import { getAzureToken, getOboToken } from "@/lib/auth";

export async function authorizeUser(request: Request): Promise<object> {
  const token = await getAzureToken(request);

  if (!token) {
    return {
      givenName: "Skogs",
      surname: "Matrosen",
    };
  }

  try {
    const oboToken = await getOboToken(
      token,
      "https://graph.microsoft.com/.default",
    );

    if (!oboToken) {
      throw new Response("Unauthorized", { status: 401 });
    }
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
