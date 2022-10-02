// import { getBrowser } from '../specs/browser'

export class MainPage {
  browser: any;
  constructor(browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      loginButton: '//*[@id="userbar"]/div[1]/div/div/div[1]',
    };
  }
  async open() {
    // await this.browser.url("https://www.onliner.by/");
    await this.browser.url("https://www.onliner.by/");
    // await browser.$("input").waitForExist({
    //     timeout: 5000,
    // });
  }

  async isLoginButtonVisible(): Promise<boolean> {
    await browser.$(this.selectors.loginButton).isDisplayed();

    return true;
  }
  async clickLoginButton() {
    this.browser.$(this.selectors.loginButton).click();
  }
}
