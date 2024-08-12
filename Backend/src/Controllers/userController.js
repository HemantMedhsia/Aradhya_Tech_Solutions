// controllers/userController.js
import UserModel from "../Models/User.js";
import { Contact } from "../Models/ContactUserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../Utils/emailConfig.js";
import nodemailer from "nodemailer";
import {
  registrationSchema,
  loginSchema,
  passwordResetSchema,
} from "../validation/validationSchema.js";
import { AuthModel } from "../Models/Authlink.js";

const userRegistration = async (req, res) => {
  const { error } = registrationSchema.validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ status: "failed", message: error.details[0].message });

  const { name, email, password, tc } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res
      .status(400)
      .send({ status: "failed", message: "Email already exists" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({ name, email, password: hashPassword, tc });
    const result = await newUser.save();
    const token = jwt.sign({ userID: result._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5m",
    });
    res
      .status(201)
      .send({ status: "success", message: "Registration successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Unable to register" });
  }
};

const userLogin = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ status: "failed", message: error.details[0].message });

  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user)
    return res
      .status(400)
      .send({ status: "failed", message: "You are not a registered user" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res
      .status(400)
      .send({ status: "failed", message: "Invalid email or password" });

  const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10m",
  });
  res.send({ status: "success", message: "Login successful", token });
  // console.log(token);
};

const changeUserPassword = async (req, res) => {
  const { password, password_confirmation } = req.body;
  const { error } = passwordResetSchema.validate({
    password,
    password_confirmation,
  });
  if (error)
    return res
      .status(400)
      .send({ status: "failed", message: error.details[0].message });

  if (password !== password_confirmation) {
    return res.status(400).send({
      status: "failed",
      message: "New Password and Confirm New Password doesn't match",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    await UserModel.findByIdAndUpdate(req.user._id, {
      $set: { password: newHashPassword },
    });
    res.send({ status: "success", message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "failed", message: "Unable to change password" });
  }
};

const loggedUser = async (req, res) => {
  res.send({ user: req.user });
};

export const allData = async (req, res) => {
  const userData = await UserModel.find();
  res.send(userData);
};

const sendUserPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(400)
      .send({ status: "failed", message: "Email field is required" });

  const user = await UserModel.findOne({ email });
  if (!user)
    return res
      .status(400)
      .send({ status: "failed", message: "Email doesn't exist" });

  const secret = user._id + process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "5m" });
  const link = `${process.env.RESET_LINK}/${user._id}/${token}`;
  console.log(link);
  const authlink = await new AuthModel({ link });
  await authlink.save();
  try {
    const mailOptions = {
      from: "vt2855028@gmail.com",
      to: user.email,
      subject: "Password Reset",
      text: `Here is your password reset link: ${link}`,
      html: `<b>Here is your password reset link: <a href="${link}">${link}</a></b>`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.send("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error.message);
    res.status(500).send({ status: "failed", message: "Email not sent" });
  }
};

export const AuthLink = async (req, res) => {
  const result = await AuthModel.find();
  res.send(result[0].link);
};

const userPasswordReset = async (req, res) => {
  const { password, password_confirmation } = req.body;
  const { id, token } = req.params;
  console.log(password, id, token);
  const user = await UserModel.findById(id);
  if (!user)
    return res.status(400).send({ status: "failed", message: "Invalid user" });

  const new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    const { error } = passwordResetSchema.validate({
      password,
      password_confirmation,
    });
    if (error)
      return res
        .status(400)
        .send({ status: "failed", message: error.details[0].message });

    if (password !== password_confirmation) {
      return res.status(400).send({
        status: "failed",
        message: "New Password and Confirm New Password doesn't match",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    await UserModel.findByIdAndUpdate(user._id, {
      $set: { password: newHashPassword },
    });
    res.send({ status: "success", message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "failed", message: "Invalid token" });
  }
};

const logout = (req, res) => {
  // Clear the token cookie
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.send({ status: "success", message: "Logged out successfully" });
};

export const userContact = async (req, res) => {
  const { subject, fullName, email, contactNumber, service, message } =
    req.body;

  const newContact = new Contact({
    name: fullName,
    email: email,
    contactNumber: contactNumber,
    topic: service,
    msg: message,
    subject: subject,
  });

  

  try {
    const response= await newContact.save();
    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "technologiesaradhya@gmail.com",
        pass: "gkdi zwod mgpo fbwr",
      },
    });

    // Email to owner
    let ownerMailOptions = {
      from: email,
      to: "technologiesaradhya@gmail.com",
      subject: "New Contact Form Submission",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr style="border-top: 1px solid #ddd; margin-top: 20px;">
        <p style="font-size: 12px; color: #888;">This email was generated from a contact form submission on your website.</p>
      </div>
    `,
    };

    // Confirmation email to user
    let userMailOptions = {
      from: "technologiesaradhya@gmail.com",
      to: email,
      subject: "Thank You for Reaching Out to Us!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #4CAF50;">Thank You for Contacting Us!</h1>
        <p>Dear Customer,${fullName}</p>
          <p>We have received your message and want to thank you for getting in touch. Our team will review your inquiry and respond as soon as possible.</p>
          <p>If your matter is urgent, please use the phone number listed below to talk to one of our staff members. Otherwise, we will get back to you shortly.</p>
          <p>Best Regards,<br/>Aradhya Technologies Team</p>
          <p style="font-size: 12px; color: #888;">Phone:+91-7235-888-990<br/>Email: technologiesaradhya@gmail.com</p>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).send("Emails sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Failed to send email");
  }
};

// Fetch  contact data

export const getAllContact = async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).send(data);
  } catch (err) {
    console.log("Error fetching data:", err);
    res.status(500).send("Failed to fetch contacts");
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const deletedContact = await Contact.findByIdAndDelete(id); // Find and delete the contact by ID

    if (!deletedContact) {
      return res.status(404).send("Contact not found"); // If the contact is not found
    }

    res.status(200).send("Contact deleted successfully"); // If deletion is successful
  } catch (err) {
    console.log("Error deleting contact:", err);
    res.status(500).send("Failed to delete contact"); // If there is an error during deletion
  }
};

export const hireUs = async (req, res) => {
  const { name, mobileNumber, email, technology, college, address } = req.body;

  // Configure Nodemailer
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "technologiesaradhya@gmail.com",
      pass: "gkdi zwod mgpo fbwr",
    },
  });

  // Email to owner
  let ownerMailOptions = {
    from: email,
    to: "technologiesaradhya@gmail.com",
    subject: "New Contact Form Submission",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${mobileNumber}</p>
      <p><strong>Service:</strong> ${technology}</p>
      <p><strong>College:</strong> ${college}</p>
      <p><strong>Message:</strong> ${address}</p>
      <hr style="border-top: 1px solid #ddd; margin-top: 20px;">
      <p style="font-size: 12px; color: #888;">This email was generated from a contact form submission on your website.</p>
    </div>
  `,
  };

  // Confirmation email to user
  let userMailOptions = {
    from: "technologiesaradhya@gmail.com",
    to: email,
    subject: "Thank You for Reaching Out to Us!",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #4CAF50;">Thank You for Contacting Us!</h1>
      <p>Dear Customer, ${name}</p>
      <p>We have received your message and want to thank you for getting in touch. Our team will review your inquiry and respond as soon as possible.</p>
      <p>If your matter is urgent, please use the phone number listed below to talk to one of our staff members. Otherwise, we will get back to you shortly.</p>
      <p>Best Regards,<br/>Aradhya Technologies Team</p>
      <p style="font-size: 12px; color: #888;">Phone:+91-7235-888-990<br/>Email: technologiesaradhya@gmail.com</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).send("Emails sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};

export {
  userRegistration,
  userLogin,
  changeUserPassword,
  loggedUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
  logout, // Export the new logout function
};
