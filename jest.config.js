module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/main.ts'
  ],
  coverageReporters: [
    'text-summary',
    'text',
    'lcovonly'
  ]
}
