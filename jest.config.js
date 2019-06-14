module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ["jest-extended"],
  testMatch: ['<rootDir>/test/**/*.test.{js,ts}'],
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts}'
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}
