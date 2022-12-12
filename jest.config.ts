module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  rootDir: './',
  testMatch: ['<rootDir>/src/*/*.test.ts']
};
