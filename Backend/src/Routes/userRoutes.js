import express from "express";
const router = express.Router();
import upload from "../Utils/multerConfig.js";
import {
  userRegistration,
  userLogin,
  changeUserPassword,
  loggedUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
  logout,
  allData,
  AuthLink,
  userContact,
  hireUs,
//   temp,
} from "../Controllers/userController.js";
import checkUserAuth from "../Middlewares/auth-middleware.js";
import {
  deleteBlogData,
  deleteContentData,
  getBlogData,
  getContent,
  getSingleBlogData,
  setBlogContentData,
  setBlogData,
  updateBlogData,
} from "../Controllers/blogController.js";

// Route Level Middleware - To Protect Route
// router.use("/changepassword", checkUserAuth);
// router.use('/loggeduser', checkUserAuth);

// Public Routes
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/send-reset-password-email", sendUserPasswordResetEmail);
router.post("/reset-password/:id/:token", userPasswordReset);
router.get("/blogs", getBlogData);
router.post("/blogs", upload.single('img'), setBlogData);
router.post("/blogs/:id/content", setBlogContentData);
router.get("/content", getContent);
router.delete("/blogs/:id/content", deleteBlogData);
router.put("/blogs/:id", updateBlogData )
router.post("/single-blog/:id",getSingleBlogData);


// Without database route
router.post("/contact",userContact);
router.post("/hire",hireUs);


// Protected Routes
router.use(checkUserAuth); // Apply authentication middleware to all protected routes
router.post("/changepassword", changeUserPassword);
router.post("/logout", logout); // Add the logout route
router.delete("blogs/:id/content/:contentid", deleteContentData);
router.get("/getdata", loggedUser)

// router.get('/loggeduser', loggedUser);

export default router;
