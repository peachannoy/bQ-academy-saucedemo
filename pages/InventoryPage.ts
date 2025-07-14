import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickItem(itemName: string) {
    await this.page.getByText(itemName).click();
  }
}
