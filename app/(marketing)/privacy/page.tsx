import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | PDX Pallet Supply',
  description: 'Privacy policy for PDX Pallet Supply. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://pdxpallets.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="section bg-page">
      <div className="container max-w-2xl prose">
        <h1>Privacy Policy</h1>
        <p className="text-muted text-sm">Last updated: January 2025</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly when you request a quote, send a message through our contact form, or call us. This includes your name, company, email address, phone number, and details about your pallet needs.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to respond to your inquiries, prepare quotes, fulfill orders, and communicate about your account. We do not sell or rent your personal information to third parties.</p>

        <h2>Analytics</h2>
        <p>We use Google Analytics to understand how visitors use our website. This data is anonymized and used only to improve our site. You can opt out via your browser settings or the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</p>

        <h2>Cookies</h2>
        <p>Our site uses session storage (not cookies) to preserve your quote form progress across page loads. This data is cleared when you close your browser tab.</p>

        <h2>Data Security</h2>
        <p>All data submitted through our forms is transmitted over HTTPS. We use Resend to process email communications, subject to their security standards.</p>

        <h2>Contact</h2>
        <p>If you have questions about this policy, <Link href="/contact">contact us</Link>.</p>
      </div>
    </section>
  );
}
