// File: backend/jestconfig.js
// This file configures Jest for the backend testing environment
module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["./__tests__/setup.js"],
  testTimeout: 30000
};
