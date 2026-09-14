import { test, expect } from "../fixtures/mocked-me";

test.describe("Navigasjon", () => {
  test("/ omdirigerer til /aktivitetslogg", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/aktivitetslogg/);
    await expect(
      page.getByRole("heading", { name: "Aktivitetslogg" }),
    ).toBeVisible();
  });

  test("viser 404 for ukjent rute", async ({ page }) => {
    const response = await page.goto("/ukjent-side-som-ikke-finnes");
    expect(response?.status()).toBe(404);
  });
});
