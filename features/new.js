import { createBdd } from 'playwright-bdd';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();


When('I click on any product', async ({page}) => {
  await page.waitForSelector('.inventory_item');
  const products = await page.$$('.inventory_item');

  await products[0].click();
});


Then('the product details should reflect the selected product name', async ({ page }) => {
    const productNameOnListPage = await page.locator('.inventory_item_name').first().textContent();
    await page.locator('.inventory_item_name').first().click();
    const productNameOnDetailsPage = await page.locator('.inventory_details_name').textContent();
    expect(productNameOnDetailsPage.trim()).toEqual(productNameOnListPage.trim());
  });



