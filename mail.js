require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const apiKey = process.env.API_KEY;
const domainKey = process.env.DOMAIN_KEY;

const auth = {
    auth: {
        api_key: apiKey,
        domain: domainKey
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: "studio786inquiry@gmail.com", // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        }
        else {
            cb(null, data);
        }
    });
}


module.exports = sendMail;