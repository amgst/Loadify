import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl my-8">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 rounded-t-2xl">
          <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 text-slate-300 space-y-6 text-sm leading-relaxed">
          <p className="text-slate-400">Last updated: November 25, 2024</p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Loadify ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website loadify.wbifytools.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li><strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages visited.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
              <li><strong>Third-Party Services:</strong> We use Google Analytics and advertising services that may collect information about your browsing behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Display personalized advertisements</li>
              <li>Ensure website security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>
              Our website uses third-party services including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li><strong>Google AdSense:</strong> For displaying advertisements. Google uses cookies to serve ads based on your prior visits to our website.</li>
              <li><strong>Google Analytics:</strong> For analyzing website traffic and user behavior.</li>
            </ul>
            <p className="mt-2">
              These third parties have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
            <p>
              We use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Access your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of data collection</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: <a href="mailto:contact@wbifytools.com" className="text-blue-400 hover:underline">contact@wbifytools.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

