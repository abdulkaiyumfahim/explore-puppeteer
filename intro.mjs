import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  slowMo: 250,
  userDataDir: "temporary",
});

const page = await browser.newPage();

await page.goto("https://duckduckgo.com/", { waitUntil: "networkidle2" });
await page.waitForSelector("#searchbox_input");
await page.type("#searchbox_input", "devconfbd");
await page.click(`[aria-label="Search"]`);

try {
  await page.waitForSelector(`[aria-label="Search Results"]`, {
    timeout: 60000,
  }); // Increased timeout to 60 seconds
} catch (error) {
  console.error(
    "Element not found within the specified timeout:",
    error.message
  );
}

await page.screenshot({ path: "duckduckgo.png" });

// await page.screenshot({ path: "duckduckgo.png" });

await browser.close();
