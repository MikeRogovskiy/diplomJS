// import { getBrowser } from '../specs/browser'

export class MainPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      loginButton:
        "/html/body/div[1]/div/div/div/header/div[3]/div/div[2]/div[2]/div[1]/div/div/div[1]",
    };
  }
  async open() {
    // await this.browser.url("https://www.onliner.by/");
    // we don not use await here, as wdio never ends this method for onliner page (for some reason)
    this.browser.url("https://www.onliner.by");
    // await browser.$("input").waitForExist({
    //     timeout: 5000,
    // });
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.browser.$(this.selectors.loginButton).isDisplayed();
  }
  async clickLoginButton() {
    this.browser.$(this.selectors.loginButton).click();
  }
}
