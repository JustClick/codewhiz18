import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  // Check for required environment variables
  if (!process.env.SENDGRID_API_KEY) {
    return NextResponse.json(
      { 
        success: false, 
        error: "SendGrid API key is not configured. Please set the SENDGRID_API_KEY environment variable." 
      },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Contact email is not configured. Please set the CONTACT_EMAIL environment variable." 
      },
      { status: 500 }
    );
  }

  // Set SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: "All fields are required" 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid email format" 
        },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: {
        email: 'noreply@codewhiz.co',
        name: 'CodeWhiz Contact Form'
      },
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="margin-top: 20px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    try {
      await sgMail.send(msg);
      return NextResponse.json({ 
        success: true,
        message: "Email sent successfully"
      });
    } catch (sendError: any) {
      console.error('SendGrid error:', sendError);
      return NextResponse.json(
        { 
          success: false, 
          error: `SendGrid error: ${sendError.message || 'Unknown error'}. Response: ${JSON.stringify(sendError.response?.body || {})}` 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? 
          `Server error: ${error.message}` : 
          "An unexpected server error occurred" 
      },
      { status: 500 }
    );
  }
}