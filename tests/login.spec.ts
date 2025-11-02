import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test.describe('Login Tests Scenarios Valid & Invalid', () => {

    test('Verify valid user can login successfully', async ({ page }) => {
        const home = new HomePage(page);
        const login = new LoginPage(page);

        await home.goto();
        await home.login(users.validUser.username, users.validUser.password);
        await login.verifyLoginSuccess();
        await login.logout();
    });

    test('Verify invalid user cannot login', async ({ page }) => {
        const home = new HomePage(page);
        const login = new LoginPage(page);

        await home.goto();
        await home.login(users.invalidUser.username, users.invalidUser.password);
        await login.verifyLoginFailure();
    }); 
});
        
