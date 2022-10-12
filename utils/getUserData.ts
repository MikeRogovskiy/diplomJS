// eslint-disable-next-line @typescript-eslint/no-var-requires
const E2EMailbox = require("e2e-mailbox").default;
const mailbox = new E2EMailbox();
export async function getUserData() {
  const email = await mailbox.createEmailAddress();
  const password = email;
  const passwordConfirm = email;

  return {
    email,
    password,
    passwordConfirm,
  };
}
