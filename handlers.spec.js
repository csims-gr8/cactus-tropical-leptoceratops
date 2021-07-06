const handlers = require("./handlers.js");

test("getJobs", () => {
  expect(handlers.getJobs()).toMatchInlineSnapshot(`Promise {}`);
});
