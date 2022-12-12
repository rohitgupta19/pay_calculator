module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  rootDir: './',
  moduleNameMapper: {
    '^src$': '<rootDir>/tests',
    '^src/(.+)$': '<rootDir>/tests/$1'
  }
};
