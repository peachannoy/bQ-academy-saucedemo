import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.page.getByTestId('firstName').fill(firstName);
    await this.page.getByTestId('lastName').fill(lastName);
    await this.page.getByTestId('postalCode').fill(postalCode);
  }

  async goToNextStep() {
    await this.page.getByTestId('continue').click();
  }
}
