import { LoginPage } from "./pageobjects/LoginPage";
import { RegisterPage } from "./pageobjects/RegisterPage";
import { MainPage } from "./pageobjects/MainPage";
import { GenUserData } from "./pageobjects/GenUserData";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { remote } from "webdriverio";
// import {
//     signUpForm,
//     checkSuccessRedirect,
//     getEmailWithConfirmationLink,
//     openConfirmationLink,
//     generateUserDataWithEmail,
// } from "./pageobjects/UserData";
jest.setTimeout(30_000);

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe("Registration", () => {
  let mainPage: MainPage;
  let registerPage: RegisterPage;
  // let confirmationPage;
  let userData: { email: string; password: any };
  let browser: WebdriverIO.Browser;
  let loginPage: LoginPage;
  beforeEach(async () => {
    browser = await remote({
      capabilities: {
        browserName: "chrome",
      },
      logLevel: "trace",
    });

    mainPage = new MainPage(browser);
    loginPage = new LoginPage(browser);
    registerPage = new RegisterPage(browser);
    // confirmationPage = new confirmationPage();
    userData = new GenUserData(browser);
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
    await mainPage.open();
    await mainPage.clickLoginButton();
    // await loginPage.open();

    // expect(await loginPage.isRegisterButtonVisible()).toBe(false);
    await loginPage.clickRegisterButton();

    // expect(await registerPage.isActive()).toBe(true);
    expect(await registerPage.isFormVisible()).toBe(true);
  });

  it("registration new user", async () => {
    // await registerPage.fillLogin(userData.login);

    await mainPage.open();
    await mainPage.clickLoginButton();

    await registerPage.fillEmail(userData.email);
    await registerPage.fillPassword(userData.password);
    await registerPage.fillPasswordConfirmation(userData.password);
    await registerPage.clickUSerAgreementCheckbox();
    await registerPage.clickRegisterButton();
  });

  // it("can create new user", async () => {
  //     const userData = await generateUserDataWithEmail();

  //     const signUpResponse = await signUpForm(userData);

  //     await checkSuccessRedirect(signUpResponse);

  //     const link = await getEmailWithConfirmationLink(userData.email);

  //     await openConfirmationLink(link);
  // });
});
