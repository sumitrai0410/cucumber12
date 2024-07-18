/** Generated from: features\login.feature */
import { test } from "@playwright/test";

test.describe("Login Feature", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("I open the \"https://www.saucedemo.com/\" page", null, { page });
  });

  test("Validate the login page title", async ({ Then, page }) => {
    await Then("I should see the title \"Swag Labs\"", null, { page });
  });

  test("Validate login error message", async ({ Then, page }) => {
    await Then("I will login as 'locked_out_user'", null, { page });
    await Then("I should see the error \"Epic sadface: Username and password do not match any user in this service\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\login.feature"),
});

const testMetaMap = {
  "Validate the login page title": {"pickleLocation":"6:3"},
  "Validate login error message": {"pickleLocation":"9:3"},
};