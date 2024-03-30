import { adminEmail, adminEmailPassword } from "@/utils/shortCut";
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, businessName, email, phoneNumber, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminEmailPassword,
      },
    });

    const mailOptions = {
      from: `${businessName}<${email}>`,
      to: "devsolwebdev@gmail.com",
      subject: "New message from your website",
      html: `<h3>Message from: ${fullName}.</h3><h5>Business Name: ${businessName}.<br/>Phone Number: ${phoneNumber}.</h5><p>${message}</p>`,
      replyTo: email,
      date: new Date().toDateString(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
