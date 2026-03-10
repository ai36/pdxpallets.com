import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | PDX Pallet Supply',
  description: 'Terms of use for PDX Pallet Supply website and services.',
  alternates: { canonical: 'https://pdxpallets.com/terms' },
};

export default function TermsPage() {
  return (
    <section className="section bg-page">
      <div className="container max-w-2xl prose">
        <h1>Terms of Use</h1>
        <p className="text-muted text-sm">Last updated: January 2025</p>

        <h2>Use of This Website</h2>
        <p>By accessing pdxpallets.com, you agree to these terms. The site and its content are provided for informational purposes and to facilitate business inquiries with PDX Pallet Supply, LLC.</p>

        <h2>Quote Requests</h2>
        <p>Submitting a quote request does not constitute a binding order or contract. Orders are confirmed only by a written invoice or purchase order from PDX Pallet Supply, LLC.</p>

        <h2>Accuracy of Information</h2>
        <p>We make reasonable efforts to keep product information, pricing, and availability accurate. Prices shown on this website are starting prices and may vary based on quantity, size, and current inventory. Final pricing is confirmed at quote.</p>

        <h2>Intellectual Property</h2>
        <p>All content on this website — including text, images, and design — is owned by PDX Pallet Supply, LLC or its licensors and may not be reproduced without permission.</p>

        <h2>Limitation of Liability</h2>
        <p>PDX Pallet Supply, LLC is not liable for any indirect or consequential damages arising from use of this website or reliance on information presented herein.</p>

        <h2>Changes</h2>
        <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>

        <h2>Contact</h2>
        <p>Questions? <Link href="/contact">Contact us.</Link></p>
      </div>
    </section>
  );
}
