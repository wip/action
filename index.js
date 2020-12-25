const { Octokit } = require("@octokit/action");
const payload = require(process.env.GITHUB_EVENT_PATH);

const isWip = /\bwip\b/i.test(payload.pull_request.title);
const octokit = new Octokit();

// https://developer.github.com/v3/repos/statuses/#create-a-status
octokit.
  .request("POST /repos/:owner/:repo/statuses/:sha", {
    owner: ![Test](https://github.com/wip/action/workflows/Test/badge.svg)payload.repository.owner.login,
    repo: payload.repository.name,
    sha: payload.pull_request.head.sha,
    state: isWip ? "pending" : "success",
    target_url: "https://github.com/wip/action",
    description: isWip ? "work in progress" : "ready for review",
    context: "WIP (action)",
  })
  .catch(console.error);
