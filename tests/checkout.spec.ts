import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { users, LoginResult } from '../utils/testData';
import { generateRandomCheckoutData } from '../utils/helpers';

test('happypath checkout with random personal info', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  // Successfully login
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  expect(await loginPage.assertSuccessfulLogin()).toBe(LoginResult.Success);

  // Choose item
  await inventoryPage.clickItem('Sauce Labs Backpack');

  // Add item to cart
  const priceForItem = await productPage.getPriceForItem();
  await productPage.addToCart();
  // Go to cart
  await productPage.goToCart();

  // Go to checkout
  await cartPage.goToCheckout();

  // Fill personal information
  const { firstName, lastName, postalCode } = generateRandomCheckoutData();
  await checkoutStepOnePage.fillInformation(firstName, lastName, postalCode);
  await checkoutStepOnePage.goToNextStep();

  // Check subtotal (without taxes) and finish checkout
  expect(await checkoutStepTwoPage.getSubTotal()).toBe(priceForItem);
  await checkoutStepTwoPage.finishCheckout();

  // Check successful order
  await expect(checkoutCompletePage.getHeaderLocator()).toHaveText(
    'Thank you for your order!',
  );
});
