import { MainPage } from "./pageobjects/mainPage"
import { RegisterPage } from "./pageobjects/RegisterPage"


describe('Registration', () => {
    let mainPage;
    let registerPage;
    let confirmationPage;
    let userData;
    let browser;
    beforeEach(() => {
        browser = await remote({
            capabilities: {
                browserName: "chrome",
            },
        });
        mainPage = new mainPage();
        registerPage = new registerPage();
        confirmationPage = new confirmationPage();
        userData = await genUserData();

    })
    afterEach(() => {
        await browser.deleteSession();
    })

    it('can register new user', async () => {
        await mainPage.open();

        expect(await mainPage, isRegisterButtonVisible()).toBe(true);

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