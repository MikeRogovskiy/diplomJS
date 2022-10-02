export class LoginPage {
  browser: WebdriverIO.Browser;
  constructor(browser) {
    this.browser = browser;
  }

  get selectors() {
    return {
      form: '//*[@id="auth-container"]/div/div[2]/div/form',
    };
  }

  async isFormVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed({});
  }

  //     async isRegisterButtonVisible(): Promise<boolean> {
  //         return true;
  //     }
  //     async clickRegisterButton() {
  //         //
  //     }
}
