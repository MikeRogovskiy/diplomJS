import { LoginPage } from "./pageobjects/LoginPage";
import { RegisterPage } from "./pageobjects/RegisterPage";
import { MainPage } from "./pageobjects/MainPage";
import { SecurePage } from "./pageobjects/SecurePage";
import { ProfilePage } from "./pageobjects/ProfilePage";
import { PersonalDataPage } from "./pageobjects/PersonalDataPage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { remote } from "webdriverio";
import {
  getEmailWithConfirmationLink,
  getUserData,
  newUserName,
} from "../utils/getUserData";

jest.setTimeout(70_000);

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe("Registration", () => {
  let mainPage: MainPage;
  let registerPage: RegisterPage;
  let userData: { email: string; password: string };
  let userName: { nickname: string; lastname: string; name: string };
  let browser: WebdriverIO.Browser;
  let loginPage: LoginPage;
  let personalDataPage: PersonalDataPage;
  let profilePage: ProfilePage;
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
    profilePage = new ProfilePage(browser);
    personalDataPage = new PersonalDataPage(browser);
    userData = await getUserData();
    userName = await newUserName();
  });
  //   afterAll(async () => {
  //     await browser.deleteSession();
  //     await sleep(5000);
  //   });

  it("can open login page from main ", async () => {
    await mainPage.open();
    expect(await mainPage.isLoginButtonVisible()).toBe(true);
    await mainPage.clickLoginButton();
    expect(await loginPage.isFormVisible()).toBe(true);
  });

  it("can open register page from login", async () => {
    await mainPage.open();
    await mainPage.clickLoginButton();
    await loginPage.clickRegisterButton();
    expect(await registerPage.isFormVisible()).toBe(true);
  });

  it("registration new user", async () => {
    await mainPage.open();
    await mainPage.clickLoginButton();
    await loginPage.clickRegisterButton();
    expect(await registerPage.isFormVisible()).toBe(true);

    await registerPage.fillEmail(userData.email);
    await registerPage.fillPassword(userData.password);
    await registerPage.fillPasswordConfirmation(userData.password);
    await registerPage.clickUSerAgreementCheckbox();
    await registerPage.clickRegisterButton();

    expect(await registerPage.expectFormVisible()).toBe(true);

    const link = await getEmailWithConfirmationLink();
    const securePage = new SecurePage(browser, link);
    await securePage.open();
    expect(await securePage.isFormProfileVisible()).toBe(true);

    await profilePage.open();

    await profilePage.clickPersonalData();
    expect(await profilePage.isPersonalDataVisible()).toBe(true);
    await profilePage.clickChangeData();
    expect(await profilePage.isClickChangeDataVisible()).toBe(true);

    await personalDataPage.formNicknameField(userName.nickname);
    await personalDataPage.formLastnameField(userName.lastname);
    await personalDataPage.formNameField(userName.name);
    await personalDataPage.formAccept();
    expect(await personalDataPage.expectNikname()).toHaveProperty(
      userName.nickname
    );
  });
});
