<p align=center><a href="https://github.com/wip/app/tree/master/assets"><img src="https://github.com/wip/app/raw/master/assets/wip-logo.png" alt="" width="200" height="200"></a></p>

<h1 align="center">DO NOT MERGE – The Action!</h1>

<p align="center">
  <a href="https://travis-ci.com/wip/app" rel="nofollow"><img alt="Build Status" src="https://travis-ci.com/wip/app.svg?branch=master"></a>
  <a href="https://greenkeeper.io/" rel="nofollow"><img src="https://badges.greenkeeper.io/wip/app.svg" alt="Greenkeeper badge"></a>
</p>

This GitHub Action sets a pull request status to pending if the title includes "WIP".

An example workflow looks like this (switch to the <kbd>`<> Edit new file`</kbd> tab when creating a new action and paste the code below):

```workflow
workflow "Set status on pull_request" {
  on = "pull_request"
  resolves = ["Set status"]
}

action "Set status" {
  uses = "wip/action@master"
  secrets = ["GITHUB_TOKEN"]
}
```

## License

[MIT](LICENSE)