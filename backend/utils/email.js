const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');
const AppError = require('./appError');

const sendEmail = catchAsync(async (options) => {
  try {
    //Create the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    //Define the email options

    const mailOptions = {
      from: 'Emanuel Rojas <emanuel@emanuel.com>',
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    //Send the email
    await transporter.sendMail(mailOptions);
  } catch (err) {
    return new AppError('There was an error sending the email', 500);
  }
});

module.exports = sendEmail;
