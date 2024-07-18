/** Generated from: features\new.feature */
import { test } from "@playwright/test";

test.describe("Login and verify product details on SauceDemo website", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("I open the \"https://www.saucedemo.com/\" page", null, { page });
  });

  test("Login and verify product details", async ({ Given, page, When, Then }) => {
    await Given("I login as 'standard_user'", null, { page });
    await When("I click on any product", null, { page });
    await Then("the product details should reflect the selected product name", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\new.feature"),
});

const testMetaMap = {
  "Login and verify product details": {"pickleLocation":"6:3"},
};