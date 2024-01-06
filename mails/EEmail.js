import eeAttendence from "../models/eeAttendence.js";

import nodemailer from "nodemailer";

const sendEmailee = async () => {
  try {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let tarik = year + "-" + month + "-" + date;

    const csStudents = await eeAttendence.find({ Status: "absent" });

    let testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "vikashmishra30852@gmail.com",
        pass: "codh gsfw ooge ajou",
      },
    });

    csStudents.forEach(async (element) => {
      let info = await transporter.sendMail({
        from: '"vikash mishra" <kameron.hoppe22@ethereal.email>', // sender address
        to: [`${element.Email}`], // list of receivers
        subject: "Ragarding Attendence ", // Subject line
        text: "प्रिय अभिभाक आपका पुत्र आज विद्यालय नहीं आया है।", // plain text body
      });

      console.log("message sent cs", info.messageId);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendEmailee;
