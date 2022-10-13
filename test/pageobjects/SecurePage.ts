export class SecurePage {
  browser: WebdriverIO.Browser;
  link: string;
  constructor(browser: WebdriverIO.Browser, secureLink: string) {
    this.browser = browser;
    this.link = secureLink;
  }
  get selectors() {
    return {
      form: '//*[@id="container"]/div/div/div/div/div/div/div/div[2]/div[2]',
    };
  }
  async open() {
    await this.browser.url(this.link);
  }
  async isFormProfileVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed({});
  }
}
