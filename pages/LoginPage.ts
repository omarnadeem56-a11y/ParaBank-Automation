import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly heading = 'h1.title';
    readonly errorMessage = '#rightPanel .error';
    readonly logoutLink = 'a[href*="logout.htm"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyLoginSuccess() {
        await expect(this.page.locator('h1.title', { hasText: 'Accounts Overview' })).toBeVisible({ timeout: 5000 });
    }

    async verifyLoginFailure() {
        await expect(this.page.locator(this.errorMessage))
        .toHaveText('The username and password could not be verified.');
    }
    async logout() {
    await this.page.click(this.logoutLink);
    }


    }