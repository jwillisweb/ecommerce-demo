import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.describe('Homepage Smoke', () => {

  test('Mobile Smoke', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.mobileSmoke();
  });

  test('Desktop Smoke', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.desktopSmoke();

  });
});

test.describe('Homepage Navigation', () => {

  test('Should Navigate to Each Page & return home', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToContact();
    await homePage.returnHome();
    await homePage.navigateToLogin();
    await homePage.returnHome();
  });

   test('Should Navigate to each Category & return home', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHandTools();
    await homePage.returnHome();
    await homePage.navigateToPowerTools();
    await homePage.returnHome();
    await homePage.navigateToOtherTools();
    await homePage.returnHome();
    await homePage.navigateToRentals();
    await homePage.returnHome();
  });

});