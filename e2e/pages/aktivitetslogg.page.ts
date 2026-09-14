import { type Locator, type Page, expect } from "@playwright/test";

export class AktivitetsloggPage {
  readonly heading: Locator;
  readonly identSearch: Locator;
  readonly behandlingSearch: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole("heading", { name: "Aktivitetslogg" });
    this.identSearch = page.getByLabel("Ident søk");
    this.behandlingSearch = page.getByLabel("Søk på behandlingId (UUID)");
  }

  async goto() {
    await this.page.goto("/aktivitetslogg");
    await expect(this.heading).toBeVisible();
  }

  async søkPåIdent(ident: string) {
    await this.identSearch.fill(ident);
    await this.identSearch.press("Enter");
  }

  async søkPåBehandlingId(behandlingId: string) {
    await this.behandlingSearch.fill(behandlingId);
  }
}
