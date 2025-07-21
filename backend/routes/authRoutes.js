// backend/routes/authRoutes.js
// This file defines the authentication routes for the application
// It includes routes for user registration, login, and fetching the current user
import express from 'express';
import { loginUser, registerUser, getCurrentUser } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getCurrentUser);

export default router;
