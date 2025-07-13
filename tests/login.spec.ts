import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users, LoginResult } from '../utils/testData';

test('login with correct credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  //Login using correct credentials
  await loginPage.login(users.validUser.username, users.validUser.password);

  expect(await loginPage.assertSuccessfulLogin()).toBe(LoginResult.Success);
});

test('login with incorrect credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  //Login using incorrect password
  await loginPage.login(users.validUser.username, users.invalidUser.password);

  expect(await loginPage.assertSuccessfulLogin()).toBe(
    LoginResult.InvalidCredentials,
  );
});
