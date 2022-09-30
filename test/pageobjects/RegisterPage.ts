export class RegisterPage {
    get selectors() {
        return {

        }
    }
    async isActive(): Promise<boolean> {
        return true;
    }

    async isFormVisible(): Promise<boolean> {
        return false;
    }
    async fillLogin(login: string) { }
}