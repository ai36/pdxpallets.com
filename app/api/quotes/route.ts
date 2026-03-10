import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const QuoteSchema = z.object({
  palletType: z.enum(['new', 'used']),
  grade: z.string().optional(),
  size: z.string().min(1),
  quantity: z.string().regex(/^\d+$/),
  delivery: z.enum(['delivery', 'pickup']),
  address: z.string(),
  notes: z.string().optional(),
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // Rate-limit hint: add edge rate limiting via Vercel middleware in production
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = QuoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.flatten() }, { status: 422 });
  }

  const d = parsed.data;
  const notifyEmail = process.env.NOTIFICATION_EMAIL ?? 'pdxpalletsupply@agamalabs.com';

  const productLine = d.palletType === 'used' && d.grade
    ? `Used Pallets — Grade ${d.grade}`
    : 'New Pallets';

  const htmlBody = `
    <h2 style="font-family:sans-serif">New Quote Request — PDX Pallet Supply</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse" cellpadding="6">
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Product</td><td>${productLine}</td></tr>
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Size</td><td>${d.size}</td></tr>
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Quantity</td><td>${d.quantity} units</td></tr>
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Fulfillment</td><td>${d.delivery === 'delivery' ? `Delivery — ${d.address}` : 'Will-call pickup'}</td></tr>
      ${d.notes ? `<tr><td style="font-weight:600;padding-right:16px;color:#555">Notes</td><td>${d.notes}</td></tr>` : ''}
      <tr><td colspan="2" style="padding-top:12px;border-top:1px solid #eee"></td></tr>
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Name</td><td>${d.name}${d.company ? ` — ${d.company}` : ''}</td></tr>
      <tr><td style="font-weight:600;padding-right:16px;color:#555">Email</td><td><a href="mailto:${d.email}">${d.email}</a></td></tr>
      ${d.phone ? `<tr><td style="font-weight:600;padding-right:16px;color:#555">Phone</td><td>${d.phone}</td></tr>` : ''}
    </table>
  `;

  // Notify internal team
  const [internalResult] = await Promise.allSettled([
    resend.emails.send({
      from: 'PDX Pallet Supply <noreply@pdxpallets.com>',
      to: notifyEmail,
      subject: `New quote request — ${d.quantity} × ${productLine} from ${d.name}`,
      html: htmlBody,
    }),
    // Auto-reply to customer
    resend.emails.send({
      from: 'PDX Pallet Supply <noreply@pdxpallets.com>',
      to: d.email,
      subject: 'We received your quote request — PDX Pallet Supply',
      html: `
        <p style="font-family:sans-serif">Hi ${d.name.split(' ')[0]},</p>
        <p style="font-family:sans-serif">Thanks for reaching out. We received your quote request for <strong>${d.quantity} ${productLine}</strong> and will follow up with availability and pricing within 2 business hours.</p>
        <p style="font-family:sans-serif">— The PDX Pallet Supply Team</p>
      `,
    }),
  ]);

  if (internalResult.status === 'rejected') {
    console.error('Failed to send quote notification:', internalResult.reason);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
