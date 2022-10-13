export class ProfilePage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }

  get selectors() {
    return {
      changeButton:
        '//*[@id="container"]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[2]/div/div/div/div/a',
      profileButton:
        '//*[@id="container"]/div/div/div/div/div/div/div/div[2]/div[1]/div/a[3]/div',
    };
  }
  async open() {
    return await this.browser.url("https://www.profile.onliner.by");
  }

  async clickPersonalData() {
    return (await this.browser.$(this.selectors.profileButton)).click();
  }
  async isPersonalDataVisible(): Promise<boolean> {
    return this.browser.$(this.selectors.profileButton).isDisplayed();
  }

  async clickChangeData() {
    return (await this.browser.$(this.selectors.changeButton)).click();
  }
  async isClickChangeDataVisible(): Promise<boolean> {
    return this.browser.$(this.selectors.changeButton).isDisplayed();
  }
}
