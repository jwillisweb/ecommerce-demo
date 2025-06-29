import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { ProductPage } from '../pages/product-page';

test.describe('Product Page Smoke', () => {

  test('Product Page Smoke', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.productPageSmoke();
  });
});