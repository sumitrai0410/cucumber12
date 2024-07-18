import { url } from "inspector";
import { createBdd } from "playwright-bdd";
import { test, expect } from "@playwright/test";

const { Given, When, Then } = createBdd();

Given("I visit the {string} page", async ({ page }, url) => {
  await page.goto(url);
});

Given("I login as {string}", async ({ page }, userName) => {
  await page.fill("#user-name", userName);
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
});

Given("I add the backpack to the cart", async ({ page }) => {
  await page.locator("#add-to-cart-sauce-labs-backpack").click();
});

When("I select the cart \\(top-right)", async ({ page }) => {
  await page.locator(".shopping_cart_link").click();
});

When("I select Checkout", async ({ page }) => {
  await page.locator("#checkout").click();
});

When(
  "I fill in the First Name, Last Name, and Zip\\/Postal Code",
  async ({ page }) => {
    await page.fill("#first-name", "Sumit");
    await page.fill("#last-name", "Rai");
    await page.fill("#postal-code", "50266");
  }
);

When("I select Continue", async ({ page }) => {
  await page.locator("#continue").click();
});

When("I select Finish", async ({ page }) => {
  await page.locator("#finish").click();
});

Then("I should see the text {string}", async ({ page }, expectedTitle) => {
  const titleText = await page.locator(".complete-header").textContent();
  await expect(titleText).toContain(expectedTitle);
});
