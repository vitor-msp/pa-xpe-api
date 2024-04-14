const config = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  rootDir: "test",
  collectCoverageFrom: ["../src/*.js"],
};

export default config;
