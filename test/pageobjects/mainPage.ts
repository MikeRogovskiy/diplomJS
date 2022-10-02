// import { getBrowser } from '../specs/browser'

export class MainPage {
  constructor(browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      LoginButton: '//*[@id="userbar"]/div[1]/div/div/div[1]',
    };
  }
  async open() {
    // browser.url()
    this.browser = browser.url("https://xvjhzt.csb.app/");
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return true;
  }
  async clickLoginButton() {
    //
  }
}
