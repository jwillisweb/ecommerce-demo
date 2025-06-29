// pages/homepage.ts | Contains: Homepage and Nav
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  private page: Page;
  private header: Locator;
  private headerLogo: Locator;
  private headerBtn: Locator;
  private bannerImg: Locator;
  private pageTitle: Locator;

  private navHome: Locator;
  private navCategories: Locator;
  private navContact: Locator;
  private navSignIn: Locator;
  private navLanguage: Locator;

  private categoryNavHandTools: Locator;
  private categoryNavPowerTools: Locator;
  private categoryNavOther: Locator;
  private categoryNavSpecialTools: Locator;
  private categoryNavRentals: Locator;


  private filters: Locator;
  private filtersBtn: Locator;
  private productContainer: Locator;



  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('navigation').filter({ hasText: 'Home Categories Hand' });
    this.headerLogo = page.getByRole('link', { name: 'Practice Software Testing - Toolshop' });
    this.headerBtn = page.getByRole('button', { name: 'Toggle navigation' });
    this.bannerImg = page.getByRole('img', { name: 'Banner' });
    this.pageTitle = page.locator('[data-test="page-title"]');

    this.navHome = page.locator('[data-test="nav-home"]');
    this.navCategories = page.locator('[data-test="nav-categories"]')
    this.navContact = page.locator('[data-test="nav-contact"]');
    this.navSignIn = page.locator('[data-test="nav-sign-in"]');
    this.navLanguage = page.locator('[data-test="language-select"]');

    this.categoryNavHandTools = page.locator('[data-test="nav-hand-tools"]');
    this.categoryNavPowerTools = page.locator('[data-test="nav-power-tools"]');
    this.categoryNavOther = page.locator('[data-test="nav-other"]');
    this.categoryNavRentals = page.locator('[data-test="nav-rentals"]');

    this.filters = page.getByText('Sort Name (A - Z)Name (Z - A)');
    this.filtersBtn = page.getByRole('button', { name: 'Filters' });
    this.productContainer = page.locator('.col-md-9 > .container');
  }


  //SMOKE TESTS
  async mobileSmoke() {
    await this.page.setViewportSize({ width: 375, height: 812 });
    await this.page.goto('https://practicesoftwaretesting.com/');

    await(this.returnHome)();
    await expect(this.headerBtn).toBeVisible();
    await expect(this.bannerImg).toBeVisible();
    await expect(this.filtersBtn).toBeVisible();
    await expect(this.productContainer).toBeVisible();
  }

  async desktopSmoke() {
    await this.page.setViewportSize({ width: 1280, height: 800 });
    await this.page.goto('https://practicesoftwaretesting.com/');

    await(this.returnHome)();
    await expect(this.navHome).toBeVisible();
    await expect(this.navCategories).toBeVisible();
    await expect(this.navContact).toBeVisible();
    await expect(this.navSignIn).toBeVisible();
    await expect(this.navLanguage).toBeVisible();
    await expect(this.bannerImg).toBeVisible();
    await expect(this.filters).toBeVisible();
    await expect(this.productContainer).toBeVisible();
  }


  //NAV FUNCTIONS
async returnHome() {
    await expect(this.header).toBeVisible();
    await expect(this.headerLogo).toBeVisible();
    await (this.headerLogo).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/');
}
    
async navigateToContact() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navContact).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/contact');
    await expect(this.page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  }

  async navigateToLogin() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navSignIn).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
  }

  async navigateToHandTools() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navCategories).click();
    await(this.categoryNavHandTools).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/category/hand-tools');
    await expect(this.pageTitle).toHaveText('Category: Hand Tools');
  }

    async navigateToPowerTools() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navCategories).click();
    await(this.categoryNavPowerTools).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/category/power-tools');
    await expect(this.pageTitle).toHaveText('Category: Power Tools');
  }

    async navigateToOtherTools() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navCategories).click();
    await(this.categoryNavOther).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/category/other');
    await expect(this.pageTitle).toHaveText('Category: Other');
  }

  async navigateToSpecialTools() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navCategories).click();
    await(this.categoryNavSpecialTools).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/category/special-tools');
    await expect(this.pageTitle).toHaveText('Category: Special Tools');
  }

  async navigateToRentals() {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await expect(this.headerLogo).toBeVisible();
    await(this.navCategories).click();
    await(this.categoryNavRentals).click();
    await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/rentals');
    await expect(this.pageTitle).toHaveText('Rentals');
  }


}
