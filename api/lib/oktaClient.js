const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'dev-855761.okta.com',
  token: '00WWkoYcRsvva7cqekaqbAei8nPgv6'
});

module.exports = client;