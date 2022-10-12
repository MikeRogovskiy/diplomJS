export class MainPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      loginButton: '//*[@id="userbar"]/div[1]/div/div/div[1]',
    };
  }
  async open() {
    this.browser.url("https://www.onliner.by");
    this.browser.$(this.selectors.loginButton).waitForExist({
      timeout: 7000,
    });
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.browser.$(this.selectors.loginButton).isDisplayed();
  }
  async clickLoginButton() {
    this.browser.$(this.selectors.loginButton).click();
  }
}
