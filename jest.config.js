module.exports = {
  roots: ["tests"],
  testMatch: [
    "**/tests/**",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath": "./tests/report/test-report.html"
    }]
  ],
  collectCoverage: true
};
