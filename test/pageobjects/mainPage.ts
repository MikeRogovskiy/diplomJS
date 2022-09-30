export class MainPage {
    get selectors() {
        return {
            registerButton: '//*[@id="auth-container"]/div/div[2]/div/form/div[4]/div[1]/a'
        }
    }
    async open() {
        // browser.url()
    }

    async isRegisterButtonVisible(): Promise<boolean> {
        return true;
    }
    async clickRegisterButton() {
        //
    }
}
