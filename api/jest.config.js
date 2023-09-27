/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  rootDir: './',
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'json'],
}
