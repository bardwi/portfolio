import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy: React.FC = () => (
  <section className="privacy">
    <div className="privacy__container">
      <h1 className="privacy__title">Privacy Policy</h1>

      <h2>1. Data Collection</h2>
      <p>
        We collect only minimal personal data (e.g. contact form inputs) and
        analytics cookies. <br />
        For security and abuse prevention, this form records your IP address,
        browser information, and submission time. The data is stored securely
        and not shared with third parties.
      </p>

      <h2>2. Use of Data</h2>
      <p>
        Your data is used solely to respond to your inquiries—never shared with
        third parties.
      </p>

      <h2>3. Cookies</h2>
      <p>
        We use necessary cookies for core functionality and analytics cookies
        (optional).
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data at
        any time.
      </p>

      <h2>5. Contact</h2>
      <p>
        For privacy concerns, email{' '}
        <a href="mailto:bardwi.brm@gmail.com">bardwi.brm@gmail.com</a>
      </p>
    </div>
  </section>
);

export default PrivacyPolicy;
