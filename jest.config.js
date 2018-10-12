const baseConfig = require('kcd-scripts/jest')

module.exports = {
  collectCoverageFrom: baseConfig.collectCoverageFrom,
  projects: [
    {
      ...baseConfig,
      displayName: 'jsdom',
      testEnvironment: 'jest-environment-jsdom',
    },
    {
      ...baseConfig,
      displayName: 'node',
      testEnvironment: 'jest-environment-node',
    },
  ],
  // this is for eslint
  modulePaths: baseConfig.modulePaths,
}
