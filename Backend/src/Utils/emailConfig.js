import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: "vt2855028@gmail.com",
//     pass: "pwtbycdgzriqaco",
//   },
// });

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "vt2855028@gmai.com",
//       pass: "hyej nafp oywq gvnx",
//     },
//   });


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for other ports
    auth: {
      user: "vt2855028@gmail.com",
      pass: "hyej nafp oywq gvnx",
    },
  });


export default transporter;
