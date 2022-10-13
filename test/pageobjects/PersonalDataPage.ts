import { Value } from "webdriverio/build/commands/element/addValue";

export class PersonalDataPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }

  get selectors() {
    return {
      nicknameField:
        '//*[@id="auth-container"]/div/div[2]/form/div[1]/div/div[2]/div/div/div/div/div/div/input',
      lastnameField:
        '//*[@id="auth-container"]/div/div[2]/form/div[2]/div/div[2]/div[1]/div/div/div/div/div/div/input',
      nameField:
        '//*[@id="auth-container"]/div/div[2]/form/div[2]/div/div[2]/div[2]/div/div/div/div/div/div/input',
      acceptButtonField:
        '//*[@id="auth-container"]/div/div[2]/form/div[4]/button',
      expectFormNikname:
        '//*[@id="container"]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[1]/div/div[2]/div/span',
    };
  }

  async formNicknameField(myNickname: Value | Value[]) {
    return await (
      await this.browser.$(this.selectors.nicknameField)
    ).setValue(myNickname);
  }
  async formLastnameField(myLastname: Value | Value[]) {
    return await (
      await this.browser.$(this.selectors.nicknameField)
    ).setValue(myLastname);
  }
  async formNameField(myName: Value | Value[]) {
    return await (
      await this.browser.$(this.selectors.nicknameField)
    ).setValue(myName);
  }
  async formAccept() {
    return await (
      await this.browser.$(this.selectors.acceptButtonField)
    ).click();
  }
  async expectNikname() {
    return await this.browser.$(this.selectors.expectFormNikname);
  }
}
