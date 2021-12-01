<p align=center><a href="https://github.com/wip/app/tree/master/assets"><img src="https://github.com/wip/app/raw/master/assets/wip-logo.png" alt="" width="200" height="200"></a></p>

<h1 align="center">DO NOT MERGE – as an action.</h1>

<p align="center">
  <a href="https://travis-ci.com/wip/app" rel="nofollow"><img alt="Build Status" src="https://travis-ci.com/wip/app.svg?branch=master"></a>
</p>

This GitHub Action sets a pull request status to pending if the title includes "WIP".

An example workflow looks like this (switch to the <kbd>`<> Edit new file`</kbd> tab when creating a new workflow and paste the code below):

```yml
name: WIP
on:
  pull_request:
    types: [opened, synchronize, reopened, edited]

jobs:
  wip:
    runs-on: ubuntu-latest
    steps:
      - uses: wip/action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Then to prevent PRs from being merged, enable the `WIP (action)` status check in your Settings > Branch > [Branch Name] > Protect matching branches > Require status checks to pass before merging

## Contributing

I don't plan to add more features to it. It's only 10 lines of code, a great reference action to build one that matches your needs :)

## License

[Apache 2.0](LICENSE)
