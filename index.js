const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const isWip = /\bwip\b/i.test(context.payload.pull_request.title)
const newStatus = isWip ? 'pending' : 'success'

// https://developer.github.com/v3/repos/statuses/#create-a-status
request('POST /repos/:owner/:repo/statuses/:sha', context.repo({
  sha: context.payload.pull_request.head.sha,
  state: newStatus,
  target_url: 'https://github.com/wip/action',
  description: isWip ? 'work in progress' : 'ready for review',
  context: 'WIP (action)'
}))
