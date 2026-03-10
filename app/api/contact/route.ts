import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  subject: z.enum(['product', 'pricing', 'delivery', 'account', 'buyback', 'other']),
  message: z.string().min(10).max(2000),
});

const SUBJECT_LABELS: Record<string, string> = {
  product: 'Product availability',
  pricing: 'Pricing inquiry',
  delivery: 'Delivery question',
  account: 'Account / billing',
  buyback: 'Pallet buyback',
  other: 'Other',
};

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.flatten() }, { status: 422 });
  }

  const d = parsed.data;
  const notifyEmail = process.env.NOTIFICATION_EMAIL ?? 'pdxpalletsupply@agamalabs.com';
  const subjectLabel = SUBJECT_LABELS[d.subject] ?? d.subject;

  const [internalResult] = await Promise.allSettled([
    resend.emails.send({
      from: 'PDX Pallet Supply <noreply@pdxpallets.com>',
      to: notifyEmail,
      replyTo: d.email,
      subject: `Contact: ${subjectLabel} — from ${d.name}`,
      html: `
        <h2 style="font-family:sans-serif">Contact Form Submission</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse" cellpadding="6">
          <tr><td style="font-weight:600;color:#555;padding-right:16px">Subject</td><td>${subjectLabel}</td></tr>
          <tr><td style="font-weight:600;color:#555;padding-right:16px">Name</td><td>${d.name}${d.company ? ` — ${d.company}` : ''}</td></tr>
          <tr><td style="font-weight:600;color:#555;padding-right:16px">Email</td><td><a href="mailto:${d.email}">${d.email}</a></td></tr>
          ${d.phone ? `<tr><td style="font-weight:600;color:#555;padding-right:16px">Phone</td><td>${d.phone}</td></tr>` : ''}
          <tr><td colspan="2" style="padding-top:8px;border-top:1px solid #eee"></td></tr>
          <tr><td colspan="2" style="font-family:sans-serif;white-space:pre-wrap">${d.message}</td></tr>
        </table>
      `,
    }),
    resend.emails.send({
      from: 'PDX Pallet Supply <noreply@pdxpallets.com>',
      to: d.email,
      subject: 'We got your message — PDX Pallet Supply',
      html: `
        <p style="font-family:sans-serif">Hi ${d.name.split(' ')[0]},</p>
        <p style="font-family:sans-serif">Thanks for reaching out. We've received your message about <strong>${subjectLabel}</strong> and will reply within one business day.</p>
        <p style="font-family:sans-serif">— The PDX Pallet Supply Team</p>
      `,
    }),
  ]);

  if (internalResult.status === 'rejected') {
    console.error('Failed to send contact notification:', internalResult.reason);
    return NextResponse.json({ error: 'Failed to deliver message' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
