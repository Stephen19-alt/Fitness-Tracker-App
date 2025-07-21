// File: backend/_tests_setup.js
// This file sets up the testing environment for the backend of the fitness tracker app
const mongoose = require("mongoose");
afterAll(async () => {
  await mongoose.connection.close();
});
