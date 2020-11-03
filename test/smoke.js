const nock = require("nock");

// SETUP
process.env.GITHUB_EVENT_NAME = "pull_request";
process.env.GITHUB_TOKEN = "secret123";
process.env.GITHUB_ACTION = "test";

// MOCK
nock("https://api.github.com", {
  reqheaders: {
    authorization: "token secret123",
  },
})
  .post("/repos/wip/app/statuses/sha123", {
    state: "success",
    target_url: "https://github.com/wip/action",
    description: "ready for review",
    context: "WIP (action)",
  })
  .reply(200, {});

// RUN
process.env.GITHUB_EVENT_PATH = require.resolve(
  "./fixtures/pull-request-not-wip.json"
);
require("..");

// MOCK
nock("https://api.github.com", {
  reqheaders: {
    authorization: "token secret123",
  },
})
  .post("/repos/wip/app/statuses/sha123", {
    state: "pending",
    target_url: "https://github.com/wip/action",
    description: "work in progress",
    context: "WIP (action)",
  })
  .reply(200, {});

// RUN
process.env.GITHUB_EVENT_PATH = require.resolve(
  "./fixtures/pull-request-wip.json"
);
delete require.cache[require.resolve("..")]; // delete cache from previous require
require("..");
