import { LoginPage } from "./pageobjects/LoginPage";
import { RegisterPage } from "./pageobjects/RegisterPage";
import { MainPage } from "./pageobjects/MainPage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { remote } from "webdriverio";

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

jest.setTimeout(60000);

describe("Registration", () => {
  let mainPage: MainPage;
  let registerPage: RegisterPage;
  // let confirmationPage;
  // let userData;
  let browser: WebdriverIO.Browser;
  let loginPage: LoginPage;
  beforeEach(async () => {
    browser = await remote({
      capabilities: {
        browserName: "chrome",
      },
      logLevel: "trace",
    });
    // await browser.url("https://www.onliner.by/");
    // await browser.$("input").waitForExist({
    //   timeout: 7000,
    // });
    mainPage = new MainPage(browser);
    loginPage = new LoginPage(browser);
    registerPage = new RegisterPage(browser);
    // confirmationPage = new confirmationPage();
    // userData = await genUserData();
  });
  afterEach(async () => {
    await browser.deleteSession();
  });

  it("can open login page from main ", async () => {
    await mainPage.open();
    expect(await mainPage.isLoginButtonVisible()).toBe(true);
    await mainPage.clickLoginButton();
    // expect(await loginPage.isActive()).toBe(true);
    expect(await loginPage.isFormVisible()).toBe(true);
  });

  it("can open register page from login", async () => {
    await loginPage.open();

    expect(await mainPage.isRegisterButtonVisible()).toBe(true);
    await mainPage.clickRegistrationButton();

    expect(await registerPage.isActive()).toBe(true);
    expect(await registerPage.isFormVisible()).toBe(true);
  });

  it("registration page actions", async () => {
    await registerPage.fillLogin(userData.login);
    await registerPage.fillEmail(userData.email);
    await registerPage.fillPassword(userData.password);
    await registerPage.fillPasswordConfirmation(userData.password);
    await registerPage.clickUSerAgreementCheckbox();
    await registerPage.clickRegisterButton();
  });
});
