import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users, LoginResult } from '../utils/testData';

test('login with correct credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(users.validUser.username, users.validUser.password)

  expect(await loginPage.assertSuccessfulLogin()).toBe(LoginResult.Success);
  await page.waitForTimeout(5000);
});
