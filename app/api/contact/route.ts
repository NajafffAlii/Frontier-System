import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, budget, timeline, description } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const subject = `New Project Enquiry: ${name} (${service || "General"})`;

    const textContent = `
New Project Enquiry from Frontier Systems Website

CLIENT DETAILS:
- Name: ${name}
- Email: ${email}
- Company: ${company || "Not specified"}
- Phone: ${phone || "Not specified"}

PROJECT SCOPE:
- Service: ${service || "Not specified"}
- Budget: ${budget || "Not specified"}
- Timeline: ${timeline || "Not specified"}

PROJECT DESCRIPTION:
${description || "No additional description provided."}

---
Sent via Frontier Systems Contact Form (https://frontiersystems.co)
Submitted At: ${new Date().toISOString()}
    `.trim();

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0F172A; line-height: 1.6; background-color: #F8FAFC; border-radius: 12px; border: 1px solid #E2E8F0;">
        <div style="border-bottom: 2px solid #D97706; padding-bottom: 16px; margin-bottom: 20px;">
          <h1 style="font-size: 20px; font-weight: 800; color: #0F172A; margin: 0; letter-spacing: 0.05em;">FRONTIER SYSTEMS</h1>
          <p style="font-size: 12px; color: #B45309; margin: 4px 0 0 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">New Project Enquiry</p>
        </div>

        <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E2E8F0; margin-bottom: 16px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748B; margin: 0 0 12px 0;">Client Information</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748B; width: 110px;"><strong>Name:</strong></td>
              <td style="padding: 6px 0; color: #0F172A; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B;"><strong>Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #B45309; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B;"><strong>Company:</strong></td>
              <td style="padding: 6px 0; color: #0F172A;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B;"><strong>Phone:</strong></td>
              <td style="padding: 6px 0; color: #0F172A;">${phone || "—"}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E2E8F0; margin-bottom: 16px;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748B; margin: 0 0 12px 0;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748B; width: 110px;"><strong>Service:</strong></td>
              <td style="padding: 6px 0; color: #B45309; font-weight: 700;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B;"><strong>Budget:</strong></td>
              <td style="padding: 6px 0; color: #0F172A; font-weight: 600;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B;"><strong>Timeline:</strong></td>
              <td style="padding: 6px 0; color: #0F172A;">${timeline}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E2E8F0;">
          <h2 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #64748B; margin: 0 0 12px 0;">Project Description</h2>
          <p style="font-size: 14px; color: #334155; margin: 0; white-space: pre-wrap;">${description || "No description provided."}</p>
        </div>

        <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8;">
          Frontier Systems • 22 Gladstone Street, Walsall, WS2 8BL • <a href="mailto:hello@frontiersystems.co" style="color: #64748B; text-decoration: underline;">hello@frontiersystems.co</a>
        </div>
      </div>
    `;

    // Check if SMTP environment variables are defined
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Frontier Systems Enquiry" <${smtpUser}>`,
        to: "hello@frontiersystems.co",
        replyTo: email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[CONTACT EMAIL SENT] Enquiry from ${name} <${email}> successfully dispatched via SMTP.`);

      return NextResponse.json({
        success: true,
        message: "Enquiry submitted and email sent successfully.",
      });
    } else {
      // SMTP credentials not yet provided in .env - log the complete payload clearly
      console.log("=================================================");
      console.log("[NEW PROJECT ENQUIRY RECEIVED]");
      console.log(textContent);
      console.log("=================================================");

      return NextResponse.json({
        success: true,
        message: "Enquiry received and recorded successfully.",
        smtpConfigured: false,
      });
    }
  } catch (error: any) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process enquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
