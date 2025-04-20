import nodemailer from 'nodemailer';

const adminEmail = "info@theonlinepresence.com";
const adminEmailFull = "Test <info@theonlinepresence.com>";
const pass = "uixtufncpzzbemvz";

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    secureConnection: false,
    ignoreTLS: true,
    auth: {
        user: adminEmail,
        pass,
    }
});

export const mailOptions = {
    from: adminEmailFull,
    to: "info@theonlinepresence.com",
};