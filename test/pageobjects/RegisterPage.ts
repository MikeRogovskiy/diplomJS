import { Value } from "webdriverio/build/commands/element/addValue";

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
      checkbox:
        "/html/body/div[3]/div/div/div/form/div[2]/div/div[9]/label/span/span[1]",
      registrationButton:
        "/html/body/div[3]/div/div/div/form/div[2]/div/div[10]/button",
      expectForm: "/html/body/div[3]/div/div/div/div/div[2]",
    };
  }
  async isActive(): Promise<boolean> {
    return true;
  }

  async isFormVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed({});
  }

  async fillEmail(emailValue: string) {
    return await this.browser.$(this.selectors.email).setValue(emailValue);
  }
  async fillPassword(passwordValue: string) {
    return await this.browser
      .$(this.selectors.password)
      .setValue(passwordValue);
  }
  async fillPasswordConfirmation(confPasswordValue: string) {
    return await this.browser
      .$(this.selectors.passwordConfirm)
      .setValue(confPasswordValue);
  }
  async clickUSerAgreementCheckbox() {
    return (await this.browser.$(this.selectors.checkbox)).click();
  }
  async clickRegisterButton() {
    return (await this.browser.$(this.selectors.registrationButton)).click();
  }
  async expectFormVisible() {
    return await this.browser.$(this.selectors.expectForm).waitForDisplayed({});
  }
}
