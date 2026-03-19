export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        moduleResolution: 'node',
        module: 'ESNext',
        isolatedModules: true,
      },
    }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!keyv)',
  ],
};
