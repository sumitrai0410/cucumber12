/** Generated from: features\product.feature */
import { test } from "@playwright/test";

test.describe("Validate product sorting by price", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("I open the \"https://www.saucedemo.com/\" page", null, { page });
  });

  test.describe("Validate product sort by price <sort>", () => {

    test("Validate product sort by price Price (low to high)", async ({ Given, page, When, Then }) => {
      await Given("I login as 'standard_user'", null, { page });
      await When("I sort the items by Price (low to high)", null, { page });
      await Then("I validate all items are sorted correctly by price Price (low to high)", null, { page });
    });

    test("Validate product sort by price Price (high to low)", async ({ Given, page, When, Then }) => {
      await Given("I login as 'standard_user'", null, { page });
      await When("I sort the items by Price (high to low)", null, { page });
      await Then("I validate all items are sorted correctly by price Price (high to low)", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\product.feature"),
});

const testMetaMap = {
  "Validate product sort by price <sort>|Validate product sort by price Price (low to high)": {"pickleLocation":"13:5"},
  "Validate product sort by price <sort>|Validate product sort by price Price (high to low)": {"pickleLocation":"14:5"},
};