module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["jest-extended"],
  testMatch: ['<rootDir>/test/**/*.test.{js,ts}'],
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.js'
  ]
}
