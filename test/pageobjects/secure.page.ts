/**
 * sub page containing specific selectors and methods for a specific page
 */
export class SecurePage {
  browser: WebdriverIO.Browser;
  link: string;
  constructor(browser: WebdriverIO.Browser, secureLink: string) {
    this.browser = browser;
    this.link = secureLink;
  }

  async open() {
    await this.browser.url(this.link);
  }

  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("#flash");
  }
}
