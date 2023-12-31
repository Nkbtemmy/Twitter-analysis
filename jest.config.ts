import type { Config } from "@jest/types";
export default async (): Promise<Config.InitialOptions> => {
	return {
		preset: "ts-jest",
		displayName: {
			name: "Twitter-analysis-app",
			color: "greenBright",
		},
		verbose: true,
		setupFiles: ["dotenv/config"],
		testMatch: ["**/*.test.ts"],
		testEnvironment: "node",
		detectOpenHandles: true,
		collectCoverage: true,
		transform: { "^.+\\.tsx?$": "ts-jest" },
		globalTeardown: "<rootDir>/tests/jest-globals-teardown.ts",
		forceExit: true,
		maxWorkers: 2,
	};
};
