import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | PAC Africa',
  description: 'The terms governing your use of the PAC Africa website and engagement of our services.',
};

export default function TermsOfServicePage() {
  return (
    <article className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10"><strong>Effective Date:</strong> July 5, 2025</p>

          <div className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>Draft notice:</strong> This is a standard, generic terms of service draft for a professional
            advisory firm. It has not been reviewed by legal counsel and should be reviewed against Kenyan law
            and PAC Africa&apos;s actual engagement practices before this page is considered final.
          </div>

          <div className="prose prose-lg max-w-none [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:mb-5 [&_ul]:space-y-2 [&_li]:text-muted-foreground [&_a]:text-primary [&_a]:underline">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website operated by
              Priority Activator Consulting Ltd, trading as PAC Africa (&quot;PAC Africa&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;), located at <a href="https://pac.africa" target="_blank" rel="noopener noreferrer">pac.africa</a>,
              and any advisory, training, certification, or consulting services you engage us to provide. By using
              this website or engaging our services, you agree to these Terms.
            </p>

            <section>
              <h2>1. Use of This Website</h2>
              <p>
                This website is provided for general information about PAC Africa&apos;s services, programmes, and
                published insights. You may not use this website in any way that causes, or is likely to cause, the
                website or access to it to be interrupted, damaged, or impaired, or in any way that is unlawful,
                fraudulent, or harmful.
              </p>
            </section>

            <section>
              <h2>2. Our Services</h2>
              <p>
                Descriptions of our advisory, training, certification, and consulting services on this website are
                for general informational purposes only and do not constitute a binding offer. Specific scope,
                deliverables, timelines, and fees for any engagement are set out separately in a signed proposal,
                statement of work, or service agreement between PAC Africa and the client.
              </p>
            </section>

            <section>
              <h2>3. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all content on this website — including text, articles, graphics, logos,
                and the PAC Africa name and branding — is the property of Priority Activator Consulting Ltd and is
                protected by applicable intellectual property laws. You may not reproduce, distribute, or create
                derivative works from this content without our prior written consent, other than for personal,
                non-commercial reference.
              </p>
            </section>

            <section>
              <h2>4. Training and Certification Programmes</h2>
              <p>
                Enrollment in any PAC Africa workshop, certification, or executive programme referenced on this
                website is subject to separate registration terms, including applicable fees, cancellation policy,
                and certification criteria, which will be communicated to you directly at the time of registration.
              </p>
            </section>

            <section>
              <h2>5. No Warranty</h2>
              <p>
                This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis
                without warranties of any kind, express or implied. While we take reasonable care to keep
                information on this website accurate and up to date, we make no representation or warranty as to
                its completeness or accuracy.
              </p>
            </section>

            <section>
              <h2>6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, PAC Africa shall not be liable for any indirect, incidental,
                or consequential damages arising from your use of this website. Nothing in these Terms limits or
                excludes liability that cannot lawfully be limited or excluded under Kenyan law.
              </p>
            </section>

            <section>
              <h2>7. External Links</h2>
              <p>
                This website may contain links to third-party websites, including our job board at{' '}
                <a href="https://jobs.pac.africa" target="_blank" rel="noopener noreferrer">jobs.pac.africa</a>. We
                are not responsible for the content or practices of any linked third-party website.
              </p>
            </section>

            <section>
              <h2>8. Privacy</h2>
              <p>
                Our collection and use of personal information through this website is described in our{' '}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2>9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this page with a revised
                effective date. Continued use of this website after changes are posted constitutes acceptance of
                the revised Terms.
              </p>
            </section>

            <section>
              <h2>10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or your use of
                this website shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section>
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:info@pac.africa">info@pac.africa</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
