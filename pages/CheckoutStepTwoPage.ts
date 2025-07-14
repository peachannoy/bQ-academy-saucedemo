import { Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getSubTotal() {
    const subtotalText = await this.page
      .getByTestId('subtotal-label')
      .textContent();
    const subtotal = parseFloat(subtotalText?.replace(/[^0-9.]/g, '') || '');
    return subtotal;
  }

  async finishCheckout() {
    await this.page.getByTestId('finish').click();
  }
}
