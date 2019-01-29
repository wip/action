const nock = require('nock')

// SETUP
process.env.GITHUB_EVENT_NAME = 'pull_request'
process.env.GITHUB_TOKEN = 'secret123'

// set other env variables so action-toolkit is happy
process.env.GITHUB_WORKFLOW = ''
process.env.GITHUB_ACTION = ''
process.env.GITHUB_ACTOR = ''
process.env.GITHUB_REPOSITORY = ''
process.env.GITHUB_WORKSPACE = ''
process.env.GITHUB_SHA = ''
process.env.GITHUB_REF = ''

// MOCK
nock('https://api.github.com', {
  reqheaders: {
    authorization: 'token secret123'
  }
})
  .post('/repos/wip/app/statuses/sha123', {
    state: 'success',
    target_url: 'https://github.com/apps/action',
    description: 'ready for review',
    context: 'WIP (action)'
  })
  .reply(200, {})

// RUN
process.env.GITHUB_EVENT_PATH = require.resolve('./fixtures/pull-request-not-wip.json')
require('..')

// MOCK
nock('https://api.github.com', {
  reqheaders: {
    authorization: 'token secret123'
  }
})
  .post('/repos/wip/app/statuses/sha123', {
    state: 'pending',
    target_url: 'https://github.com/apps/action',
    description: 'work in progress',
    context: 'WIP (action)'
  })
  .reply(200, {})

// RUN
process.env.GITHUB_EVENT_PATH = require.resolve('./fixtures/pull-request-wip.json')
delete require.cache[require.resolve('..')] // delete cache from previous require
require('..')
