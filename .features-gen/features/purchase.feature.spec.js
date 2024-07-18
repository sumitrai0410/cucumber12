/** Generated from: features\purchase.feature */
import { test } from "@playwright/test";

test.describe("Validate successful purchase text", () => {

  test("Successful purchase", async ({ Given, page, And, When, Then }) => {
    await Given("I visit the \"https://www.saucedemo.com/\" page", null, { page });
    await And("I login as 'standard_user'", null, { page });
    await And("I add the backpack to the cart", null, { page });
    await When("I select the cart (top-right)", null, { page });
    await And("I select Checkout", null, { page });
    await And("I fill in the First Name, Last Name, and Zip/Postal Code", null, { page });
    await And("I select Continue", null, { page });
    await And("I select Finish", null, { page });
    await Then("I should see the text 'Thank you for your order!'", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\purchase.feature"),
});

const testMetaMap = {
  "Successful purchase": {"pickleLocation":"3:3"},
};