process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";


export async function POST (request) {
  const { email, text} = await request.json();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


async function main() {
  const info = await transporter.sendMail({
    from: "magda@example.com", 
    to: "slodzinska.magdalena@gmail.com",
    subject: "question from localhost",
    text: `${email} pyta ${text}`
  
  });

  console.log(info);

}
main().catch(console.error);
return NextResponse.json({message: "email send"}, {status: 201});

}