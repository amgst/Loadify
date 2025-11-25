import React, { useState } from 'react';
import { Wand2, X, Loader2, Code2 } from 'lucide-react';
import { LoaderItem } from '../types';
import { generateLoaderWithAI } from '../services/geminiService';

interface AIGeneratorProps {
  onClose: () => void;
  onGenerate: (loader: LoaderItem) => void;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ onClose, onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateLoaderWithAI(prompt);
      const newLoader: LoaderItem = {
        id: `ai-${Date.now()}`,
        name: result.name,
        type: 'other',
        html: result.html,
        css: result.css,
        isAiGenerated: true
      };
      onGenerate(newLoader);
      onClose();
    } catch (e) {
      setError("Failed to generate loader. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in">
        
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Wand2 className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-bold text-white">AI Loader Designer</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 text-sm text-blue-200">
            <p className="flex gap-2">
              <Code2 className="w-4 h-4 mt-0.5 shrink-0" />
              Describe any animation you can imagine. Our AI will write the pure CSS for you instantly.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Describe your loader
            </label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A glowing neon ring that pulses and changes color from cyan to magenta, or a 3D rotating cube grid..."
              className="w-full h-32 bg-slate-950 border border-slate-800 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition-all"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded border border-red-900/50">
              {error}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Designing...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                Generate Loader
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIGenerator;
