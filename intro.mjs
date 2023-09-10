// import puppeteer from "puppeteer";
// import { setTimeout } from "timers/promises";

// const browser = await puppeteer.launch({
//   headless: false,
//   defaultViewport: { width: 1920, height: 1080 },
//   slowMo: 250,
//   userDataDir: "temporary",
// });

// const page = await browser.newPage();

// await page.goto("https://duckduckgo.com/", { waitUntil: "networkidle2" });
// await page.waitForSelector("#search_form_input_homepage");
// await page.type("#search_form_input_homepage", "devconfbd");
// await page.click("#search_button_homepage");
// await page.waitForSelector('[data-testid="result-title-a"]');
// await page.screenshot({ path: "duckduckgo" });
// await browser.close();

import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  userDataDir: "temporary",
});

const page = await browser.newPage();

await page.goto("https://duckduckgo.com/", { waitUntil: "networkidle2" });
await page.waitForSelector([(id *= "searchbox_input")]);
await page.type([(id *= "searchbox_input")], "devconfbd");
// await page.click([(id *= "searchbox_input")]);
// await page.waitForSelector('[data-testid="result-title-a"]');
await page.goto("https://devconfbd.com/", { waitUntil: "networkidle2" });

await page.screenshot({ path: "duckduckgo.png" });
await browser.close();

// await page.goto("https://devconfbd.com/");
// await page.screenshot({ path: "devconfbd.png" });

// const guestElement = await page.waitForSelector("img[alt='guest']");
// await guestElement.scrollIntoView();
// await setTimeout(1000);

// await guestElement.click("img[alt='guest']");
// await setTimeout(1000);

// await page.screenshot({ path: "guest.png" });
// await browser.close();
