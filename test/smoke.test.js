const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

test("practice files exist and are not empty", () => {
  for (const filename of ["one.txt", "two.txt"]) {
    const content = fs.readFileSync(path.join(root, filename), "utf8").trim();
    assert.notEqual(content, "");
  }
});
