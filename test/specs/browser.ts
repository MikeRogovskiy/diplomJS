// eslint-disable-next-line @typescript-eslint/no-var-requires
const { remote } = require("webdriverio");

let browser;

(async () => {
  browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  await browser.url("https://www.onliner.by/");
  await browser.$("input").waitForExist({
    timeout: 5000,
  });
})();

export function getBrowser() {
  return browser;
}
