import express from "express";
import path from "path";
const router = express.Router();
import upload from "../Utils/multerConfig.js";
import { upload2 } from "../Utils/storageMulterConfig.js";
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
  getAllContact,
  deleteContact,
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
import { fileURLToPath } from "url";
import {
  addSingleCertification,
  certification,
  getCertificationDetails,
} from "../Controllers/certificationController.js";

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.resolve(__dirname, "Public")));

// Route Level Middleware - To Protect Route
// router.use("/changepassword", checkUserAuth);
// router.use('/loggeduser', checkUserAuth);

// Public Routes
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/send-reset-password-email", sendUserPasswordResetEmail);
router.post("/reset-password/:id/:token", userPasswordReset);
router.get("/blogs", getBlogData);
router.post("/blogs", upload.single("img"), setBlogData);
router.post("/blogs/:id/content", setBlogContentData);
router.get("/content", getContent);
router.delete("/blogs/:id/content", deleteBlogData);
router.put("/blogs/:id", updateBlogData);
router.post("/single-blog/:id", getSingleBlogData);

// Contact page
router.post("/contact", userContact);
router.get("/contact", getAllContact);
router.delete("/contact/:id", deleteContact);
router.post("/hire", hireUs);

// Certification
router.post("/add-certification-csv", upload2.single("csvfile"), certification);
router.post("/add-certification", addSingleCertification);
router.post("/get-certification-detail/:cern/:name", getCertificationDetails);

// Protected Routes
router.use(checkUserAuth); // Apply authentication middleware to all protected routes
router.post("/changepassword", changeUserPassword);
router.post("/logout", logout); // Add the logout route
router.delete("blogs/:id/content/:contentid", deleteContentData);
router.get("/getdata", loggedUser);

// router.get('/loggeduser', loggedUser);

export default router;
