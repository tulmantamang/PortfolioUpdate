import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});
export default {
  sendMail: (mailOptions: any) =>
    transporter.sendMail({ from: process.env.MAIL_FROM || process.env.MAIL_USER, ...mailOptions })
};
