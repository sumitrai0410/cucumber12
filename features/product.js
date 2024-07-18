import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

// 1. Missing step definition for "features\product.feature:8:5"
When("I sort the items by Price \\(low to high)", async ({ page }) => {
  await page.selectOption(".product_sort_container", "lohi");
});

// 2. Missing step definition for "features\product.feature:9:5"
Then(
  "I validate all items are sorted correctly by price Price \\(low to high)",
  async ({ page }) => {
    const prices = await page.$$eval(".inventory_item_price", (items) =>
      items.map((item) => parseFloat(item.textContent.replace("$", "")))
    );

    const sortedPrices = [...prices].sort((a, b) => a - b);

    if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
      throw new Error("Items are not sorted by price (low to high)");
    }
  }
);

// 3. Missing step definition for "features\product.feature:8:5"
When("I sort the items by Price \\(high to low)", async ({ page }) => {
  await page.selectOption(".product_sort_container", "hilo");
});

// 4. Missing step definition for "features\product.feature:9:5"
Then(
  "I validate all items are sorted correctly by price Price \\(high to low)",
  async ({ page }) => {
    const prices = await page.$$eval(".inventory_item_price", (items) =>
      items.map((item) => parseFloat(item.textContent.replace("$", "")))
    );

    const sortedPrices = [...prices].sort((a, b) => b - a);

    if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
      throw new Error("Items are not sorted by price (high to low)");
    }
  }
);
