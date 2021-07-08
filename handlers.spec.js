const handlers = require("./handlers.js");

test("getJobs", () => {
  // TODO Need to initialize database or mock database to get something here
  expect(handlers.getJobs()).resolves.toMatchInlineSnapshot(`
Object {
  "error": "no database!",
}
`);
});
