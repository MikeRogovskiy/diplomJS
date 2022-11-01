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
export async function newUserName() {
  return {
    nickname: `nickname${Math.random()}`,
    lastname: `nickname${Math.random()}`,
    name: `nickname${Math.random()}`,
  };
}

export async function getEmailWithConfirmationLink() {
  let emailsList = [];
  while (emailsList.length === 0) {
    // eslint-disable-next-line
    emailsList = await mailbox.fetchEmailList();
  }
  return emailsList[0].mail_body.match(
    /https:\/\/profile.onliner.by\/registration\/[a-z0-9-]+\/[a-z0-9-]+/
  )[0];
}
