import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, complaintType, complaint } = body;

    // Input validation
    if (!name || !email || !complaintType || !complaint) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const EMAIL_HOST = process.env.EMAIL_HOST;
    const EMAIL_PORT = process.env.EMAIL_PORT;
    const COMPLAINT_EMAIL_USER = process.env.COMPLAINT_EMAIL_USER;
    const COMPLAINT_EMAIL_PASS = process.env.COMPLAINT_EMAIL_PASS;
    const COMPLAINT_EMAIL_TO = process.env.COMPLAINT_EMAIL_TO;
    const COMPLAINT_EMAIL_FROM = process.env.COMPLAINT_EMAIL_FROM;

    // Validate environment variables
    if (!EMAIL_HOST || !EMAIL_PORT || !COMPLAINT_EMAIL_USER || !COMPLAINT_EMAIL_PASS || !COMPLAINT_EMAIL_TO || !COMPLAINT_EMAIL_FROM) {
      console.error('Missing complaint email configuration environment variables');
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
        user: COMPLAINT_EMAIL_USER,
        pass: COMPLAINT_EMAIL_PASS,
      },
    });

    // Current date and time
    const dateTime = new Date().toLocaleString();

    // Email content
    const mailOptions = {
      from: COMPLAINT_EMAIL_FROM,
      to: COMPLAINT_EMAIL_TO,
      subject: `Complaint: ${complaintType} - ${name}`,
      text: `
        Complaint Details:
        ------------------
        Name: ${name}
        Email: ${email}
        Type: ${complaintType}
        Date: ${dateTime}
        
        Complaint:
        ${complaint}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #e11d48; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Complaint Submitted</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Complaint Type:</strong> ${complaintType}</p>
            <p><strong>Date:</strong> ${dateTime}</p>
            <p><strong>Complaint:</strong></p>
            <p style="background-color: #f9fafb; padding: 10px; border-radius: 5px;">${complaint}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #6b7280; border-top: 1px solid #e0e0e0; padding-top: 10px;">
            <p>This complaint was submitted from the Profile & Salome website.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Complaint sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send complaint' },
      { status: 500 }
    );
  }
} 