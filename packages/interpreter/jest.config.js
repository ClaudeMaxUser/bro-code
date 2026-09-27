module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^bro-code-parser$": "<rootDir>/../parser/src/index.ts",
  },
};
