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

const emailPattern =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  if (
    !formData ||
    typeof formData.name !== "string" ||
    typeof formData.email !== "string" ||
    typeof formData.message !== "string"
  ) {
    return { success: false, message: "Please complete all three fields." };
  }

  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!name || name.length > 100) {
    return { success: false, message: "Please enter a name of 1–100 characters." };
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }
  if (!message || message.length > 5000) {
    return {
      success: false,
      message: "Please enter a message of 1–5,000 characters.",
    };
  }

  const host = process.env.EMAIL_SERVER_HOST?.trim();
  const portValue = process.env.EMAIL_SERVER_PORT?.trim() ?? "";
  const port = Number(portValue);
  const user = process.env.EMAIL_SERVER_USER?.trim();
  const password = process.env.EMAIL_SERVER_PASSWORD;
  const to = process.env.EMAIL_TO?.trim();
  const from = process.env.EMAIL_FROM?.trim() || user;

  if (
    !host ||
    !/^\d+$/.test(portValue) ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !password ||
    !to ||
    !from ||
    !emailPattern.test(from)
  ) {
    return {
      success: false,
      message:
        "The contact form is temporarily unavailable. Please use the email link to reach me directly.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass: password,
      },
    });

    const mailOptions = {
      from: { name: "Portfolio Contact", address: from },
      replyTo: { name, address: email },
      to,
      subject: "New message from your portfolio",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
            `,
    };

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
