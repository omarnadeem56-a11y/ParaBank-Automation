import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { HomePage } from '../pages/HomePage';
import { RegisterPage, RegistrationData } from '../pages/RegisterPage';

interface RegistrationTestData {
  validRegistrations: RegistrationData[];
}

const testDataPath = path.join(__dirname, '..', 'test-data', 'new-users.json');
const registrationTestData = JSON.parse(
  fs.readFileSync(testDataPath, 'utf-8')
) as RegistrationTestData;

test.describe('User registration', () => {
  for (const registration of registrationTestData.validRegistrations) {
    test(`should register a new user: ${registration.username}`, async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.goto();
      await homePage.clickRegister();

      const registerPage = new RegisterPage(page);
      const uniqueSuffix = Date.now().toString();
      const uniqueRegistration: RegistrationData = {
        ...registration,
        username: `${registration.username}${uniqueSuffix}`,
        confirmPassword: registration.confirmPassword,
      };

      await registerPage.register(uniqueRegistration);
      await registerPage.verifyRegistrationSuccess(uniqueRegistration.username);
    });
  }
});
