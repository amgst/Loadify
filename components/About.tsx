import React from 'react';
import { X, Code, Palette, Zap, Heart } from 'lucide-react';

interface AboutProps {
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl my-8">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 rounded-t-2xl">
          <h1 className="text-2xl font-bold text-white">About Loadify</h1>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 text-slate-300 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Premium CSS Loaders Collection</h2>
            <p className="text-lg text-slate-400">
              Discover 100+ beautifully crafted CSS loaders and spinners for your web projects
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5" />
              What is Loadify?
            </h3>
            <p className="leading-relaxed">
              Loadify is a comprehensive collection of premium CSS loading animations designed for modern web developers. 
              We provide 100+ ready-to-use loaders across multiple categories including spinners, dots, bars, grids, and pulse effects. 
              All code is copy-paste ready and fully customizable.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <strong className="text-white">100+ Loaders:</strong> Extensive collection of CSS animations
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <strong className="text-white">Real-time Customization:</strong> Adjust color, size, and speed instantly
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <strong className="text-white">Copy-Paste Ready:</strong> Get HTML and CSS code with one click
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <strong className="text-white">Multiple Categories:</strong> Spinners, dots, bars, grids, and pulse effects
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <strong className="text-white">Free to Use:</strong> All loaders are free for personal and commercial use
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              How to Use
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Browse through our collection of loaders</li>
              <li>Customize the color, size, and speed to match your design</li>
              <li>Click "Get Code" to view the HTML and CSS</li>
              <li>Copy and paste into your project</li>
              <li>Enjoy beautiful loading animations!</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Our Mission
            </h3>
            <p className="leading-relaxed">
              Our mission is to provide web developers with high-quality, customizable CSS loaders that enhance user experience 
              without adding unnecessary complexity. We believe in making beautiful animations accessible to everyone.
            </p>
          </section>

          <section className="border-t border-slate-800 pt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="leading-relaxed">
              Have questions or suggestions? We'd love to hear from you!<br />
              Email: <a href="mailto:contact@wbifytools.com" className="text-blue-400 hover:underline">contact@wbifytools.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

