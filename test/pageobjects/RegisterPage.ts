export class RegisterPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      form: "/html/body/div[3]/div/div/div/form/div[2]",
      email:
        "/html/body/div[3]/div/div/div/form/div[2]/div/div[5]/div/div/div/div/input",
      password:
        "/html/body/div[3]/div/div/div/form/div[2]/div/div[6]/div/div/div/div/input",
      passwordConfirm:
        "/html/body/div[3]/div/div/div/form/div[2]/div/div[8]/div/div/div/div/input",
    };
  }
  async isActive(): Promise<boolean> {
    return true;
  }

  async isFormVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed({});
  }

  async fillEmail() {
    return await this.browser.$(this.selectors.password);
  }

  async fillPassword() {
    return await this.browser.$(this.selectors.password);
  }
  async fillPasswordConfirmation() {
    return await this.browser.$(this.selectors.email);
  }
}
