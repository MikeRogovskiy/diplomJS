export class SecurePage {
  browser: WebdriverIO.Browser;
  link: string;
  constructor(browser: WebdriverIO.Browser, secureLink: string) {
    this.browser = browser;
    this.link = secureLink;
  }
  get selectors() {
    return {
      form: "/html/body/div[1]/div/div/div/div/div/div/div/div/div[2]",
    };
  }
  async open() {
    await this.browser.url(this.link);
  }

  async profileTab(): Promise<boolean> {
    return await (await this.link.$(this.selectors.form)).isDisplayed();
  }
  async browserUrl() {
    return this.browser.url(this.link);
  }
}
