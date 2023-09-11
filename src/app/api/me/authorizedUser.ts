import { getAzureSession } from "@/lib/auth";

export async function authorizeUser(request: Request): Promise<object> {
  const session = await getAzureSession(request);

  // Wonderwall tar seg av session, hvis vi ikke har en session kjører vi uten sidecar og skal være i dev
  if (!session || session.expiresIn === 0) {
    return {
      givenName: "Skogs",
      surname: "Matrosen",
    };
  }

  try {
    const oboToken = await session.apiToken(
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
