export class LoginPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }

  get selectors() {
    return {
      form: '//*[@id="auth-container"]/div/div[2]',
      button: '//*[@id="auth-container"]/div/div[2]/div/form/div[4]/div[1]/a',
    };
  }

  async isFormVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed();
  }

  // async isRegisterButtonVisible(): Promise<boolean> {

  //     return this.browser.$(this.selectors.button).isDisplayed();
  // }

  async clickRegisterButton() {
    this.browser.$(this.selectors.button).click();
  }
}
