// controllers/userController.js
import UserModel from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transporter from '../Utils/emailConfig.js';
import {
  registrationSchema,
  loginSchema,
  passwordResetSchema
} from '../validation/validationSchema.js';

const userRegistration = async (req, res) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) return res.status(400).send({ status: "failed", message: error.details[0].message });

  const { name, email, password, tc } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).send({ status: "failed", message: "Email already exists" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({ name, email, password: hashPassword, tc });
    const result = await newUser.save();
    const token = jwt.sign({ userID: result._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5m' });
    res.status(201).send({ status: "success", message: "Registration successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Unable to register" });
  }
};

const userLogin = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send({ status: "failed", message: error.details[0].message });

  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).send({ status: "failed", message: "You are not a registered user" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ status: "failed", message: "Invalid email or password" });

  const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
  res.send({ status: "success", message: "Login successful", token });
  // console.log(token);
};

const changeUserPassword = async (req, res) => {
  const { password, password_confirmation } = req.body;
  const { error } = passwordResetSchema.validate({ password, password_confirmation });
  if (error) return res.status(400).send({ status: "failed", message: error.details[0].message });

  if (password !== password_confirmation) {
    return res.status(400).send({ status: "failed", message: "New Password and Confirm New Password doesn't match" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } });
    res.send({ status: "success", message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Unable to change password" });
  }
};

const loggedUser = async (req, res) => {
  res.send({ user: req.user });
};

const sendUserPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send({ status: "failed", message: "Email field is required" });

  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).send({ status: "failed", message: "Email doesn't exist" });

  const secret = user._id + process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' });
  const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;
  console.log(link);

  // Send Email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: "GeekShop - Password Reset Link",
      html: `<a href=${link}>Click Here</a> to Reset Your Password`
    });
    res.send({ status: "success", message: "Password reset email sent. Please check your email" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Unable to send email" });
  }
};

const userPasswordReset = async (req, res) => {
  const { password, password_confirmation } = req.body;
  const { id, token } = req.params;
  const user = await UserModel.findById(id);
  if (!user) return res.status(400).send({ status: "failed", message: "Invalid user" });

  const new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    const { error } = passwordResetSchema.validate({ password, password_confirmation });
    if (error) return res.status(400).send({ status: "failed", message: error.details[0].message });

    if (password !== password_confirmation) {
      return res.status(400).send({ status: "failed", message: "New Password and Confirm New Password doesn't match" });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    await UserModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } });
    res.send({ status: "success", message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Invalid token" });
  }
};



const logout = (req, res) => {
  // Clear the token cookie
  res.clearCookie('token', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  res.send({ status: "success", message: "Logged out successfully" });
}; 




export {
  userRegistration,
  userLogin,
  changeUserPassword,
  loggedUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
  logout // Export the new logout function
};
