const nodemailer = require("nodemailer");
const emailTemplate = require("../templates/email-template");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (req, res) => {
     console.log("req body",req.body)
  try {
    const { name, email, message, subject } = req.body;
    const template = emailTemplate(name, email, message, subject);

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: template.html,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

module.exports = {
  sendEmail,
};
