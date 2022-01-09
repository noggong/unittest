module.exports = {
    rootDir: '.',
    preset: 'ts-jest',
    testMatch: ["<rootDir>/**/?(*.)+(spec|test).ts?(x)"],
    "coveragePathIgnorePatterns": [
        "<rootDir>/node_modules",
        "<rootDir>/dist",
        "<rootDir>/.nyc_output",
        "<rootDir>/src/App.ts",
        "<rootDir>/*.json",
        "<rootDir>/*.yml",
    ],
    collectCoverageFrom: [
        "<rootDir>/**/src/services/*.ts",
        "<rootDir>/**/src/controllers/*.ts",
        "<rootDir>/**/src/repository/*.ts",
        "!**/node_modules/**",
        "!**/dist/**",
        "!**/.nyc_output/**",
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    collectCoverage: false,
    coverageReporters: ["text"],
    testEnvironment: "node",
}
