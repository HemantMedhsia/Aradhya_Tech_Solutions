import express from "express";
const router = express.Router();
import {
  userRegistration,
  userLogin,
  changeUserPassword,
  loggedUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
  logout,
} from "../Controllers/userController.js";
import checkUserAuth from "../Middlewares/auth-middleware.js";

// Route Level Middleware - To Protect Route
// router.use("/changepassword", checkUserAuth);
// router.use('/loggeduser', checkUserAuth);

// Public Routes
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/send-reset-password-email", sendUserPasswordResetEmail);
router.post("/reset-password/:id/:token", userPasswordReset);

// Protected Routes
router.use(checkUserAuth); // Apply authentication middleware to all protected routes
router.post("/changepassword", changeUserPassword);
router.post("/logout", logout); // Add the logout route

// router.get('/loggeduser', loggedUser);

export default router;
