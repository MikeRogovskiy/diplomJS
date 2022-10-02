export class RegisterPage {
  get selectors() {
    return {
      from: "form",
      loginInput: "input.login",
    };
  }
  async isActive(): Promise<boolean> {
    return true;
  }

  async isFormVisible(): Promise<boolean> {
    return false;
  }
  async fillLogin(login: string) {}
}
