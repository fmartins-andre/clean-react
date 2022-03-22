import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  passWithNoTests: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config