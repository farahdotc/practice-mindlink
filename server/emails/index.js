// const sgMail = require('@sendgrid/mail');
// //set the sendgrdi API key to the value listed in the .env file at SENDGRID_API_KEY
// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

// //in sendgrid, run the function to set the API key to the variable SENDGRID_API_KEY which we've just defined above as coming from the .env file
// sgMail.setApiKey(SENDGRID_API_KEY);

// //use the sendgrid .sendWelcomeEmail method which is taking the paramters of emain and name (but how does it know from where? - the values were passed as the parameters when the function was called in controller file: (user.email, user.name))
// exports.sendWelcomeEmail = (email, name) => {
//   //.send is a method to define the message to be sent - there are other options including senders name
//   sgMail.send({
//     to: email,
//     //we are refereing back to our .env file for the from email address (why is the sender email in .env vs hardcode? change only in one location if our sendgrid login changes? NO - it will be on github or other places and you don't want anything that's in .env to be out)
//     from: `${process.env.FROM_EMAIL}`,
//     subject: 'Thanks for signing up.',
//     text: `Hi ${name}! Welcome to your task manager api.`
//   });
// };

// exports.sendCancellationEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: `${process.env.FROM_EMAIL}`,
//     subject: 'Sorry to see you go.',
//     text: `Bye ${name}. Hope to see you soon.`
//   });
// };

// exports.forgotPasswordEmail = (email, token) => {
//   // write html in the backtick - when the target = underscore blank, we go to new tab, rel is related to cors, href is path, add text to display for hyperlink and close tag
//   const exampleHTMLEmail = `
//   <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
//   `;
//   //standard set-up of values for sendgrid, instead of text we do html - it is going to give you a link to click on
//   sgMail.send({
//     to: email,
//     from: `${process.env.FROM_EMAIL}`,
//     subject: 'Password Reset.',
//     // text: `Hi ${name}! Please click the link below to reset your password.`
//     html: exampleHTMLEmail
//   });
// };
