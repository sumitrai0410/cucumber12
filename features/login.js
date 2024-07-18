import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I open the {string} page", async ({ page }, url) => {
  await page.goto(url);
});

Then("I should see the title {string}", async ({ page }, title) => {
  await expect(page).toHaveTitle(title);
});

Then("I will login as {string}", async ({ page }, userName) => {
  await page.fill("#user-name", userName);
  await page.fill("#password", "secret_");
  await page.click("#login-button");
});

Then("I should see the error {string}", async ({ page }, error) => {
  await expect(page.locator("h3[data-test='error']")).toHaveText(error);
});
