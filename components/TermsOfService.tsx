import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl my-8">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 rounded-t-2xl">
          <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 text-slate-300 space-y-6 text-sm leading-relaxed">
          <p className="text-slate-400">Last updated: November 25, 2024</p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using Loadify (loadify.wbifytools.com), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily use the CSS loaders and code snippets provided on this website for personal and commercial projects. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Modify or copy the materials for redistribution</li>
              <li>Use the materials for any commercial purpose without attribution</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Code Usage</h2>
            <p>
              All CSS code and HTML snippets provided on Loadify are free to use in your projects. While attribution is appreciated, it is not required. You may modify the code to suit your needs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Disclaimer</h2>
            <p>
              The materials on Loadify are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitations</h2>
            <p>
              In no event shall Loadify or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Loadify's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Accuracy of Materials</h2>
            <p>
              The materials appearing on Loadify could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Links</h2>
            <p>
              Loadify has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Loadify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Modifications</h2>
            <p>
              Loadify may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at: <a href="mailto:contact@wbifytools.com" className="text-blue-400 hover:underline">contact@wbifytools.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

