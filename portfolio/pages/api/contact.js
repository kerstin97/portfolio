// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  require("dotenv").config();

  const PASSWORD = process.env.password;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "kerstinr.dev@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "kerstinr.dev@gmail.com",
    to: "kerstin.reichinger@gmx.at",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  console.log(req.body);
  res.send("success");
  //return res.status(200);
}
