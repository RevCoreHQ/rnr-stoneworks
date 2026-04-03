import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/data/site-config';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy | Rock N Roll Stoneworks',
  description:
    'Privacy policy for Rock N Roll Stoneworks. Learn how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Privacy Policy', url: `${siteConfig.url}/privacy-policy` },
        ])}
      />
      <div className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-md mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-ink-400 mb-10">
            Last updated: April 3, 2026
          </p>

          <div className="prose prose-ink max-w-none space-y-8 text-ink-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Who We Are
              </h2>
              <p>
                {siteConfig.name}, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{' '}
                <a href={siteConfig.url} className="text-gold-600 underline">{siteConfig.url}</a>.
                We are a custom pool, spa, and outdoor living contractor based in {siteConfig.address.city}, {siteConfig.address.state}.
                This privacy policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact information</strong> you provide through our forms, including your name, email address, phone number, and project details.
                </li>
                <li>
                  <strong>Usage data</strong> collected automatically, such as your IP address, browser type, pages visited, and time spent on our site.
                </li>
                <li>
                  <strong>Cookies and tracking technologies</strong> used to improve your browsing experience and analyze site performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide free estimates</li>
                <li>To communicate with you about your project</li>
                <li>To improve our website and services</li>
                <li>To send relevant updates about our services (only with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                How We Protect Your Information
              </h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption to secure data transmitted between your browser and our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Third-Party Services
              </h2>
              <p>
                We may use third-party services to help operate our website and business, including form processing, analytics, and advertising platforms. These services may collect information as described in their own privacy policies. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Cookies
              </h2>
              <p>
                Our website uses cookies to enhance your experience, analyze traffic, and support our advertising efforts. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Request that we stop processing your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-ink-900 mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or your personal data, contact us at:
              </p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>{siteConfig.name}, LLC</strong></li>
                <li>{siteConfig.address.full}</li>
                <li>
                  Email:{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-gold-600 underline">{siteConfig.email}</a>
                </li>
                <li>
                  Phone:{' '}
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-gold-600 underline">{siteConfig.phone}</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
