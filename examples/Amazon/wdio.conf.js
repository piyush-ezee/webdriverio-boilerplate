const master = require('../../wdio.conf')
var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.amazon.com/',
  specs: ['./examples/Amazon/**/*.test.js'],
  logLevel: 'error',
  suites: {
    dev: ['./examples/Amazon/E2E/searchExample.test.js'],
    integration: ['./examples/Amazon/Integration/**/*.test.js'],
    e2e: ['./examples/Amazon/E2E/*.test.js'],
  },
  reporters: ['spec', ['junit', {
    outputDir: './'
  }]],
  maxInstances: 6,
  services: ['browserstack'],
  capabilities: [
    {
      project: `Amazon Example`,
      "browserstack.debug": "true",
      browser: 'chrome',
      'goog:chromeOptions': {
        args: ['disable-infobars'],
      },
      resolution: '1280x1024',
      os: 'Windows',
      os_version: '10',
      // 'browserstack.geoLocation': 'US',
      'browserstack.console': 'errors',
      'browserstack.networkLogs': true,
      "build": buildName,
      // "browserstack.local" : browserstackLocal,
      // "browserstack.localIdentifier" : browserstackLocalIdentifier
    },
  ],
  //browserstack credentials
  user: username,
  key: accessKey,
})
