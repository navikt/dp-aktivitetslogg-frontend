import { test as base } from "@playwright/test";

/* eslint-disable react-hooks/rules-of-hooks -- Playwright fixtures use `use()`, not a React hook */

/**
 * /api/me kaller i produksjon ut mot Microsoft Graph. I test-/CI-miljø uten
 * nettverkstilgang vil det kallet feile, så vi mocker det for å holde
 * testene deterministiske og uavhengige av ekte auth-infrastruktur.
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route("**/api/me", (route) =>
      route.fulfill({
        json: { givenName: "Test", surname: "Bruker" },
      }),
    );
    await use(page);
  },
});

export { expect } from "@playwright/test";
