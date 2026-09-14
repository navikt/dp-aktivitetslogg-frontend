import { test, expect } from "../fixtures/mocked-me";
import { AktivitetsloggPage } from "../pages/aktivitetslogg.page";
import { BEHANDLING_ID, behandlingFixture } from "../fixtures/aktivitetslogg";

test.describe("Søk på ident", () => {
  test("viser behandlinger fra mock-API etter søk på ident", async ({
    page,
  }) => {
    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();

    await aktivitetsloggPage.søkPåIdent("21840298148");

    // Data kommer fra den innebygde mock-dataen serveren returnerer
    // når IS_LOCALHOST=true og API_BASE_URL ikke er satt.
    await expect(page.getByText(/^Behandling /).first()).toBeVisible();
  });
});

test.describe("Søk på behandlingId", () => {
  test("viser aktiviteter for en funnet behandling", async ({ page }) => {
    await page.route("**/api/aktivitetslogg/behandling/**", (route) =>
      route.fulfill({ json: behandlingFixture }),
    );

    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();
    await aktivitetsloggPage.søkPåBehandlingId(BEHANDLING_ID);

    await expect(page.getByText(`Behandling ${BEHANDLING_ID}`)).toBeVisible();
    await expect(page.getByText(/Innvilget/)).toBeVisible();
  });

  test("viser melding når ingen aktiviteter finnes for behandlingen", async ({
    page,
  }) => {
    // Ingen route-mock: serveren returnerer [] som standard i lokal-modus.
    const ukjentId = "00000000-0000-0000-0000-000000000000";
    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();
    await aktivitetsloggPage.søkPåBehandlingId(ukjentId);

    await expect(
      page.getByText("Ingen aktiviteter funnet for denne behandlingen."),
    ).toBeVisible();
  });

  test("ignorerer søketekst som ikke er en gyldig UUID", async ({ page }) => {
    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();
    await aktivitetsloggPage.søkPåBehandlingId("ikke-en-uuid");

    await expect(page.getByText("Ingen behandlinger å vise.")).toBeVisible();
  });
});
