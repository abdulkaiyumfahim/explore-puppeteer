import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  slowMode: 250,
  userDataDir: "temporary",
});

const page = await browser.newPage();
await page.goto("https://www.w3schools.com/", {
  waitUntil: "networkidle2",
  timeout: 60000,
});

await page.screenshot({ path: "w3schools.png" });
await browser.close();
