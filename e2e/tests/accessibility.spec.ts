import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "../fixtures/mocked-me";
import { AktivitetsloggPage } from "../pages/aktivitetslogg.page";
import { BEHANDLING_ID, behandlingFixture } from "../fixtures/aktivitetslogg";

test.describe("Tilgjengelighet", () => {
  test("/aktivitetslogg uten søkeresultat har ingen a11y-brudd", async ({
    page,
  }) => {
    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();
    await expect(page).toHaveTitle(/Aktivitetslogg/);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("/aktivitetslogg med rendret tidslinje har ingen a11y-brudd", async ({
    page,
  }) => {
    await page.route("**/api/aktivitetslogg/behandling/**", (route) =>
      route.fulfill({ json: behandlingFixture }),
    );

    const aktivitetsloggPage = new AktivitetsloggPage(page);
    await aktivitetsloggPage.goto();
    await aktivitetsloggPage.søkPåBehandlingId(BEHANDLING_ID);
    await expect(page.getByText(`Behandling ${BEHANDLING_ID}`)).toBeVisible();
    await expect(page).toHaveTitle(/Aktivitetslogg/);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
