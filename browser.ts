const { remote } = require("webdriverio");

let browser;

(async () => {
    browser = await remote({
        capabilities: {
            browserName: "chrome",
        },
    });
})();
export function getBrowser() {
    return browser;
}