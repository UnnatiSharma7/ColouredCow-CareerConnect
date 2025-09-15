const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      text,
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Email not sent:", error);
  }
};

module.exports = sendEmail;
