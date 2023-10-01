/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": ["ts-jest", { isolatedModules: true }],
  },
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  testTimeout: 30000,
  moduleDirectories: ["node_modules", "src"],
};
