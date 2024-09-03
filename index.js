const Firecrawl = require("firecrawl");

async function runDemo() {
  const crawler = new Firecrawl({
    url: "https://example.com",
    maxDepth: 2,
    maxPages: 10,
  });

  crawler.on("data", (data) => {
    console.log("Crawled:", data.url);
  });

  crawler.on("error", (error) => {
    console.error("Error:", error);
  });

  crawler.on("done", () => {
    console.log("Crawl completed");
  });

  await crawler.start();
}

runDemo().catch(console.error);
