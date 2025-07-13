import { expect, type Locator, type Page } from '@playwright/test';
import { LoginResult } from '../utils/testData';


export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }

    async assertSuccessfulLogin() {
        const error = this.page.getByTestId('error');

        if (await this.page.getByTestId('inventory-container').isVisible()) {
            return LoginResult.Success;
        }

        if (await error.isVisible()) {
            const text = await error.textContent();
            if (text?.includes('locked out')) {
                return LoginResult.LockedOut;
            }
        }
        return LoginResult.InvalidCredentials;
    }
}