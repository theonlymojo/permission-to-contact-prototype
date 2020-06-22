// Use this file to change prototype configuration.

module.exports = {
  // Service name
  serviceName: 'Sign up to be contacted about coronavirus vaccine research',

  // Test journdeys
  testJourney: 'v2',
  testJourneyOptOut: 'opt-out-v1',

  // Port to run nodemon on locally
  port: 2000,

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: true,
}
