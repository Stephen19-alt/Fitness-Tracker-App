// generateToken.js
// This file generates a JWT token for user authentication.
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = generateToken;
