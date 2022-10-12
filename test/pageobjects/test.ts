// import originFetch, { Response } from "node-fetch";
// import qs from "qs";
// import makeFetchCookie from "fetch-cookie";

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const E2EMailbox = require("e2e-mailbox").default;

// const cookiesJar = new makeFetchCookie.toughCookie.CookieJar();
// const fetch = makeFetchCookie(originFetch, cookiesJar);
// const mailbox = new E2EMailbox();

// export async function generateUserDataWithEmail() {
//     const email = await mailbox.createEmailAddress();
//     const username = email;
//     const password = email;
//     const passwordConfirm = password;

//     return {
//         username,
//         email,
//         password,
//         passwordConfirm,
//     };
// }

// export async function signUpForm(userData) {
//     const body = qs.stringify({
//         ...userData,
//     });

//     return fetch("https://profile.onliner.by/sdapi/user.api/registration", {
//         headers: {
//             accept: "application/json, text/plain, */*",
//             "accept-language":
//                 "en,ru;q=0.9,es-ES;q=0.8,es;q=0.7,zh-CN;q=0.6,zh;q=0.5,es-MX;q=0.4,de;q=0.3,en-US;q=0.2",
//             "access-control-allow-credentials": "true",
//             "content-type": "application/json;charset=UTF-8",
//             "x-api-version": "2",
//             "x-onliner-device": "345f5b5c-2d5e-479d-89cc-f03b9bde9729",
//             Referer: "https://profile.onliner.by/registration",
//             "Referrer-Policy": "strict-origin-when-cross-origin",
//         },
//         body,
//         method: "POST",
//     });
// }

// export async function checkSuccessRedirect(signUpFormResult: Response) {
//     const pageHtml = await signUpFormResult.text();
//     if (!pageHtml.includes("было выслано письмо")) {
//         throw new Error("wrong page");
//     }
// }

// export async function getEmailWithConfirmationLink() {
//     let emailsList = [];
//     while (emailsList.length === 0) {
//         // eslint-disable-next-line
//         emailsList = await mailbox.fetchEmailList();
//     }
//     return emailsList[0].mail_body.match(
//         /https:\/\/gitflic\.ru\/user\/confirm\/\w+/
//     )[0];
// }

// export async function openConfirmationLink(link) {
//     const response = await fetch(link);
//     const html = await response.text();
//     if (!html.includes("Спасибо, Ваш Email подтвержден")) {
//         throw new Error(`failed to confirm email: ${html}`);
//     }
// }
