import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl relative text-lg mx-auto px-4 py-8 pb-20 text-seasalt space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <div className="space-y-2">
        <p className="text-[#F8F9FB]/70">Effective Date: 01 July 2025</p>
        <p className="text-[#F8F9FB]/70 italic">
          <strong>Operated By:</strong> Aeontrix, the AI Division of Pasovit
          Technologies Private Limited
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix designs, builds, and manages AI agents and automation
          workflows across platforms like Slack, WhatsApp, n8n, Make, Zapier,
          and others. This policy explains how we handle your data when you use
          our services, download our lead magnets, or subscribe to our
          newsletter. <br />
          By interacting with Aeontrix (via services, website forms, or content
          downloads), you consent to the data practices outlined here.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. What Data We Collect</h2>
        <div className="md:ml-4">
          <h3 className="text-xl font-semibold mb-1 mt-4">
            a. Client & Subscriber Data
          </h3>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Name, email address, job title, company (if provided)</li>
            <li>API keys, tokens (encrypted) – for clients</li>
            <li>Newsletter preferences and subscription status</li>
          </ul>
          <p className="mt-2 text-[#F8F9FB]/80">
            We collect this information through:
          </p>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Service intake and onboarding forms</li>
            <li>Newsletter sign-up forms</li>
            <li>
              Lead magnets (e.g., downloadable guides or templates) with opt-in
              checkboxes for weekly emails
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-1 mt-4">
            b. System & Debug Data (Clients Only)
          </h3>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Workflow setups</li>
            <li>API logs, error reports</li>
            <li>Agent performance data</li>
          </ul>

          <h3 className="text-xl font-semibold mb-1 mt-4">
            c. End-User Data (Managed Services Only)
          </h3>
          <p className="text-[#F8F9FB]/80 md:ml-4">
            Access to chat transcripts or usage data is limited to retainer
            clients who explicitly permit this access. It's used for:
          </p>
          <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Debugging</li>
            <li>Agent optimization</li>
            <li>Improving system reliability</li>
          </ul>
          <p className="text-[#F8F9FB]/80 md:ml-4">
            We never use end-user data for unsolicited outreach, resale, or
            profiling.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">We use your data to:</p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Deliver AI services or consulting</li>
          <li>Send requested resources (e.g., lead magnets)</li>
          <li>
            Send newsletters and educational content (only to subscribers who’ve
            opted in)
          </li>
          <li>Improve performance and customer experience</li>
          <li>Comply with legal and security obligations</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          You can unsubscribe from newsletters at any time via the link at the
          bottom of each email.
        </p>
        <p className="text-[#F8F9FB]/80 mt-4 md:ml-4">
          We use client-provided data only to:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Set up and configure AI agents or chatbot services</li>
          <li>Provide technical support and maintenance</li>
          <li>Improve service design and implementation quality</li>
          <li>Send essential service-related communications</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          We do not sell, lease, or share your data with unauthorized third
          parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          4. Data Storage & Retention
        </h2>
        <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            Subscriber and client data is stored securely using our email and
            project management platforms
          </li>
          <li>API credentials are encrypted</li>
          <li>
            Data is retained only as long as necessary for service or content
            delivery
          </li>
          <li>Newsletter data is retained until you opt out</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          5. Use of Third-Party Platforms
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix builds and deploys AI systems that operate on third-party
          platforms such as messaging tools, automation platforms, CRMs, and
          cloud services. <br />
          As part of our onboarding process, we will{" "}
          <strong>
            {" "}
            explicitly specify which platforms will be used for your project,
          </strong>{" "}
          allowing you to{" "}
          <strong>
            review their respective terms and privacy policies.
          </strong>{" "}
          <br />
          We only work with{" "}
          <strong>reliable and widely recognized platforms</strong> that
          maintain strong data protection practices. However, please note that:
        </p>
        <ul className="list-disc list-inside md:ml-4 text-[#F8F9FB]/80 space-y-1 mt-2">
          <li>
            Aeontrix does <strong>not control or store end-user data</strong>{" "}
            handled by these platforms.
          </li>
          <li>
            You are responsible for ensuring your own compliance with the terms
            and data practices of any third-party services used in your
            deployment.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Security Measures</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          We implement appropriate technical and organizational measures to:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Encrypt sensitive data (e.g., credentials, API tokens)</li>
          <li>
            Restrict internal access to configuration data by using Role-based
            access control (RBAC)
          </li>
          <li>Conduct periodic reviews of system access logs</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          While we strive to protect your data, we cannot guarantee absolute
          security due to the nature of internet-based services and third-party
          dependencies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">You have the right to: </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent for marketing emails</li>
          <li>
            Request complete deletion of your records (subject to
            service-related data retention limitations)
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          Contact us at{" "}
          <a
            target="_blank"
            href="mailto:contact@aeontrix.com"
            className="underline text-[#00FF93]"
          >
            contact@aeontrix.com
          </a>
          . We’ll respond within 5 business days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Our services are <strong>not directed to children under 16,</strong>{" "}
          and we do not knowingly collect any data from them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Policy Updates</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          We may update this Privacy Policy periodically. Any changes will be
          posted on our website and, where significant, notified via email to
          registered clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <address className="not-italic md:ml-4 text-[#F8F9FB]/80 leading-relaxed">
          <strong>Aeontrix (Pasovit Technologies Private Limited)</strong>
          <br />
          715 A, Spencer Plaza, 7th Floor, No. 768-769, Anna Salai
          <br />
          Chennai, Tamil Nadu 600 002, India
          <br />
          Email:{" "}
          <a
            target="_blank"
            href="mailto:contact@aeontrix.com"
            className="underline italic text-[#00FF93]"
          >
            contact@aeontrix.com
          </a>
          {" | "}
          <a
            target="_blank"
            href="mailto:contact@pasovit.com"
            className="underline italic text-[#00FF93]"
          >
            contact@pasovit.com
          </a>
        </address>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          11. Reference to Parent Company Policy
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          This Privacy Policy is supplemental to the broader privacy framework
          maintained by our parent company. For additional legal and operational
          context, refer to:
          <a
            target="_blank"
            href="https://www.pasovit.com/privacy"
            className="underline italic text-[#00FF93]"
          >
            Pasovit Technologies Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
