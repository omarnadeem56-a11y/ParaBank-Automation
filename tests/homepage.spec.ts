import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';


test('Verify Parabank (Localization) title via POM', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const title = await home.getTitle();
    expect(title).toContain('ParaBank | Welcome | Online Banking');

});