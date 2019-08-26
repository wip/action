<p align=center><a href="https://github.com/wip/app/tree/master/assets"><img src="https://github.com/wip/app/raw/master/assets/wip-logo.png" alt="" width="200" height="200"></a></p>

<h1 align="center">DO NOT MERGE – as an action.</h1>

<p align="center">
  <a href="https://travis-ci.com/wip/app" rel="nofollow"><img alt="Build Status" src="https://travis-ci.com/wip/app.svg?branch=master"></a>
  <a href="https://greenkeeper.io/" rel="nofollow"><img src="https://badges.greenkeeper.io/wip/app.svg" alt="Greenkeeper badge"></a>
</p>

This GitHub Action sets a pull request status to pending if the title includes "WIP".

An example workflow looks like this (switch to the <kbd>`<> Edit new file`</kbd> tab when creating a new workflow and paste the code below):

```workflow
on: [pull_request]
	name: "Set status on pull_request"
	jobs:
	    psalm:
	        name: "Set status"
	        runs-on: ubuntu-latest
	        steps:
	            - uses: wip/action@master
```

## License

[MIT](LICENSE)
