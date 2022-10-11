export class GenUserData {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }
  get selectors() {
    return {
      email: "mikhail.rogovskiy+093939@upsilonit.com",
    };
  }
  async userData() {
    const email = this.selectors.email;
    const username = email;
    const password = email;
    const passwordConfirm = password;

    return {
      username,
      email,
      password,
      passwordConfirm,
    };
  }
}
