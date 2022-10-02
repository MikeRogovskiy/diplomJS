import { LoginPage } from "./pageobjects/LoginPage";
import { RegisterPage } from "./pageobjects/RegisterPage";
import { MainPage } from "./pageobjects/MainPage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { remote } = require("webdriverio");

describe("Registration", () => {
  let mainPage;
  let registerPage;
  let confirmationPage;
  let userData;
  let browser;
  let loginPage;
  beforeEach(async () => {
    browser = await remote({
      capabilities: {
        browserName: "chrome",
      },
    });
    mainPage = new MainPage(browser);
    loginPage = new LoginPage();
    registerPage = new RegisterPage();
    confirmationPage = new confirmationPage();
    userData = await genUserData();
  });
  afterEach(async () => {
    await browser.deleteSession();
  });

  it("can register new user", async () => {
    await mainPage.open();

    expect(await mainPage.isLoginButtonVisible()).toBe(true);

    await mainPage.clickLoginButton();
    expect(await loginPage.isActive()).toBe(true);
    expect(await loginPage.isFormVisible()).toBe(true);

    // await LoginPage.open();

    // expect(await mainPage.isRegisterButtonVisible()).toBe(true);

    await mainPage.clickRegistrationButton();

    expect(await registerPage.isActive()).toBe(true);
    expect(await registerPage.isFormVisible()).toBe(true);

    await registerPage.fillLogin(userData.login);
    await registerPage.fillEmail(userData.email);
    await registerPage.fillPassword(userData.password);
    await registerPage.fillPasswordConfirmation(userData.password);
    await registerPage.clickUSerAgreementCheckbox();
    await registerPage.clickRegisterButton();
  });
});
