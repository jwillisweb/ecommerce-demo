// pages/homepage.ts | Contains: Homepage and Nav
import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  private page: Page;
  private header: Locator;
  private headerLogo: Locator;
  private productTitle: Locator;
  private productImg: Locator;
  private categoryPill: Locator;
  private brandPill: Locator;
  private productPrice: Locator;
  private productDescription: Locator;
  private decreaseQtyBtn: Locator;
  private increaseQtyBtn: Locator;
  private QtyInput: Locator;

  private addToCartBtn: Locator;
  private favouriteBtn: Locator;

 



  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('navigation').filter({ hasText: 'Home Categories Hand' });
    this.headerLogo = page.getByRole('link', { name: 'Practice Software Testing - Toolshop' });
    this.productTitle = page.locator('[data-test="product-name"]');
    this.productImg = page.getByRole('img', { name: 'Combination Pliers' });
    this.categoryPill = page.getByLabel('category');
    this.brandPill = page.getByLabel('brand');
    this.productPrice = page.locator('[data-test="unit-price"]');
    this.productDescription = page.locator('[data-test="product-description"]');
    this.decreaseQtyBtn = page.locator('[data-test="decrease-quantity"]');
    this.increaseQtyBtn = page.locator('[data-test="increase-quantity"]');
    this.QtyInput = page.locator('[data-test="quantity"]');

    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
    this.favouriteBtn = page.locator('[data-test="add-to-favorites"]');
  }

async productPageSmoke() {
    await this.page.goto('https://practicesoftwaretesting.com/product/01JYYDHMAME47H1QFZ0TR51D0S');
    await expect(this.headerLogo).toBeVisible();
    await expect(this.productTitle).toBeVisible();
    await expect(this.productImg).toBeVisible();
    await expect(this.categoryPill).toBeVisible();
    await expect(this.brandPill).toBeVisible();
    await expect(this.productPrice).toBeVisible();
    await expect(this.productDescription).toBeVisible();
    await expect(this.decreaseQtyBtn).toBeVisible();
    await expect(this.increaseQtyBtn).toBeVisible();
    await expect(this.QtyInput).toHaveValue('1');
    await expect(this.addToCartBtn).toBeVisible();
    await expect(this.favouriteBtn).toBeVisible();
  }
}