import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, course, message } = body;

    // Input validation
    if (!name || !email || !phone || !course || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const EMAIL_HOST = process.env.EMAIL_HOST;
    const EMAIL_PORT = process.env.EMAIL_PORT;
    const ADMIN_EMAIL_USER = process.env.ADMIN_EMAIL_USER;
    const ADMIN_EMAIL_PASS = process.env.ADMIN_EMAIL_PASS;
    const ADMIN_EMAIL_TO = process.env.ADMIN_EMAIL_TO;
    const ADMIN_EMAIL_FROM = process.env.ADMIN_EMAIL_FROM;

    // Validate environment variables
    if (!EMAIL_HOST || !EMAIL_PORT || !ADMIN_EMAIL_USER || !ADMIN_EMAIL_PASS || !ADMIN_EMAIL_TO || !ADMIN_EMAIL_FROM) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(EMAIL_PORT),
      secure: parseInt(EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: ADMIN_EMAIL_USER,
        pass: ADMIN_EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: ADMIN_EMAIL_FROM,
      to: ADMIN_EMAIL_TO,
      subject: `New Application from ${name} - ${course}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #2563eb; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Course Application</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Course Interest:</strong> ${course}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9fafb; padding: 10px; border-radius: 5px;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #6b7280; border-top: 1px solid #e0e0e0; padding-top: 10px;">
            <p>This email was sent from the Profile & Salome website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 