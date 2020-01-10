<p align=center><a href="https://github.com/wip/app/tree/master/assets"><img src="https://github.com/wip/app/raw/master/assets/wip-logo.png" alt="" width="200" height="200"></a></p>

<h1 align="center">DO NOT MERGE – as an action.</h1>

<p align="center">
  <a href="https://travis-ci.com/wip/app" rel="nofollow"><img alt="Build Status" src="https://travis-ci.com/wip/app.svg?branch=master"></a>
  <a href="https://greenkeeper.io/" rel="nofollow"><img src="https://badges.greenkeeper.io/wip/app.svg" alt="Greenkeeper badge"></a>
</p>

This GitHub Action sets a pull request status to pending if the title includes "WIP".

An example workflow looks like this (switch to the <kbd>`<> Edit new file`</kbd> tab when creating a new workflow and paste the code below):

```yml
name: Set PR review status
on:
  pull_request:
    types: [ opened, synchronize, reopened, edited ]

jobs:
  wip:
    name: Set WIP status
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    steps:
      - uses: wip/action@master
```

## Contributing

I don't plan to add more features to it. It's only 10 lines of code, a great reference action to build one that matches your needs :)

## License

[MIT](LICENSE)
