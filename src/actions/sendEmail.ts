// src/actions/sendEmail.ts

"use server";

import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT as unknown as number,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${formData.email}>`,
      to: process.env.EMAIL_TO,
      subject: "New message from your portfolio",
      text: `
                Name: ${formData.name}
                Email: ${formData.email}
                Message: ${formData.message}
            `,
      html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message}</p>
            `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "There was an error sending your message. Please try again later.",
    };
  }
}
