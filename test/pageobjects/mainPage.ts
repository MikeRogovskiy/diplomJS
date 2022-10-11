export class MainPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      button: '//*[@id="auth-container"]/div/div[2]/div/form/div[4]/div[1]/a',
      loginButton:
        "/html/body/div[1]/div/div/div/header/div[3]/div/div[2]/div[2]/div[1]/div/div/div[1]",
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
