const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');
const AppError = require('./appError');

const sendEmail = catchAsync(async (options) => {
  try {
    //Create the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    //Define the email options

    const mailOptions = {
      from: 'Fundamentes Costa Rica <fundamentescr@gmail.com>',
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
