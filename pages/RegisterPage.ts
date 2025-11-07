import { Page, expect } from '@playwright/test';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput = '#customer\\.firstName';
  readonly lastNameInput = '#customer\\.lastName';
  readonly streetInput = '#customer\\.address\\.street';
  readonly cityInput = '#customer\\.address\\.city';
  readonly stateInput = '#customer\\.address\\.state';
  readonly zipCodeInput = '#customer\\.address\\.zipCode';
  readonly phoneNumberInput = '#customer\\.phoneNumber';
  readonly ssnInput = '#customer\\.ssn';
  readonly usernameInput = '#customer\\.username';
  readonly passwordInput = '#customer\\.password';
  readonly confirmPasswordInput = '#repeatedPassword';
  readonly registerButton = 'input[value="Register"]';
  readonly successHeading = '#rightPanel h1.title';
  readonly successMessage = '#rightPanel p';

  constructor(page: Page) {
    this.page = page;
  }

  async fillFirstName(value: string) {
    await this.page.fill(this.firstNameInput, value);
  }

  async fillLastName(value: string) {
    await this.page.fill(this.lastNameInput, value);
  }

  async fillStreet(value: string) {
    await this.page.fill(this.streetInput, value);
  }

  async fillCity(value: string) {
    await this.page.fill(this.cityInput, value);
  }

  async fillState(value: string) {
    await this.page.fill(this.stateInput, value);
  }

  async fillZipCode(value: string) {
    await this.page.fill(this.zipCodeInput, value);
  }

  async fillPhoneNumber(value: string) {
    await this.page.fill(this.phoneNumberInput, value);
  }

  async fillSsn(value: string) {
    await this.page.fill(this.ssnInput, value);
  }

  async fillUsername(value: string) {
    await this.page.fill(this.usernameInput, value);
  }

  async fillPassword(value: string) {
    await this.page.fill(this.passwordInput, value);
  }

  async fillConfirmPassword(value: string) {
    await this.page.fill(this.confirmPasswordInput, value);
  }

  async submitRegistration() {
    await this.page.click(this.registerButton);
  }

  async register(data: RegistrationData) {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillStreet(data.street);
    await this.fillCity(data.city);
    await this.fillState(data.state);
    await this.fillZipCode(data.zipCode);
    await this.fillPhoneNumber(data.phoneNumber);
    await this.fillSsn(data.ssn);
    await this.fillUsername(data.username);
    await this.fillPassword(data.password);
    await this.fillConfirmPassword(data.confirmPassword);
    await this.submitRegistration();
  }

  async verifyRegistrationSuccess(username: string) {
    await expect(this.page.locator(this.successHeading)).toContainText(username);
    await expect(this.page.locator(this.successMessage)).toHaveText(
      'Your account was created successfully. You are now logged in.'
    );
  }
}
