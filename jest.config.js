module.exports = {
  roots: ["tests"],
  testMatch: [
    "**/tests/**",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
