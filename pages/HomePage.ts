import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly usernameField = '[name="username"]';
  readonly passwordField = '[name="password"]';
  readonly loginButton = 'input[value="Log In"]';
  readonly registerLink = 'a[href*="register.htm"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    // go to the base URL (http://localhost:8080)
    await this.page.goto('index.htm?');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async clickRegister() {
    await this.page.click(this.registerLink);
  }
    async getTitle() {
    return this.page.title();
  }
}