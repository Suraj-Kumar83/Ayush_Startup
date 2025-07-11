const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS, 
  },
});

const sendSignupNotification = async (user) => {
  const mailOptions = {
    from: `"AYUSH Startup Portal" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.NOTIFY_EMAIL || process.env.ADMIN_EMAIL, 
    subject: "New User Signup Notification",
    html: `
      <h2>New Signup Alert</h2>
      <p><strong>Username:</strong> ${user.username || "N/A"}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Method:</strong> ${user.method || "Manual"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Signup notification sent!");
  } catch (err) {
    console.error("Failed to send notification email:", err);
  }
};

module.exports = sendSignupNotification;
