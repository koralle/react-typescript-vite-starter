import type { Config } from '@jest/types';

// Export Jest Config
const config: Config.InitialOptions = {
  verbose: true,
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "@/(.*)$": "<roorDir>/src/$1"
  }
}

export default config
