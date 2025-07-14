import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getPriceForItem() {
    const priceText = await this.page
      .getByTestId('inventory-item-price')
      .textContent();
    const priceValue = parseFloat(priceText?.replace('$', '') || '');
    return priceValue;
  }

  async addToCart() {
    await this.page.getByTestId('add-to-cart').click();
  }

  async goToCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}
