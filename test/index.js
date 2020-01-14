"use strict";

const snapshot = require("snap-shot");
const path = require("path");
const fs = require("fs");

const metascraper = require("metascraper")([
  require("metascraper-readerable")()
]);

describe("metascraper-readerable", () => {
  describe(".readerable", function() {
    it("are.na/blog", async () => {
      const url =
        "https://www.are.na/blog/when-it-changed-part-3-an-ambient-aftermath";
      const html = fs.readFileSync(
        path.resolve(__dirname, "fixtures/are.na-blog.html"),
        "utf-8"
      );
      const metadata = await metascraper({ html, url });
      snapshot(metadata);
    });

    it("damonzucconi.com", async () => {
      const url = "http://damonzucconi.com";
      const html = fs.readFileSync(
        path.resolve(__dirname, "fixtures/damonzucconi.com.html"),
        "utf-8"
      );
      const metadata = await metascraper({ html, url });
      snapshot(metadata);
    });
  });
});
