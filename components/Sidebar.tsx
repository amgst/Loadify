import React from 'react';
import { LoaderConfig, LoaderCategory } from '../types';
import { Sliders, Palette, Clock, Maximize, RefreshCw, Box } from 'lucide-react';

interface SidebarProps {
  config: LoaderConfig;
  setConfig: React.Dispatch<React.SetStateAction<LoaderConfig>>;
  selectedCategory: LoaderCategory;
  setSelectedCategory: (c: LoaderCategory) => void;
  onReset: () => void;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ config, setConfig, selectedCategory, setSelectedCategory, onReset, isOpen, setIsOpen }) => {
  
  const categories: LoaderCategory[] = ['all', 'spinner', 'dots', 'bar', 'pulse', 'grid'];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800 p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <RefreshCw className="text-white w-6 h-6 animate-spin-slow" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Loadify</h1>
        </div>

        <div className="space-y-8">
          {/* Customization Section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Customize
            </h3>
            
            <div className="space-y-5">
              {/* Color */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 flex items-center gap-2">
                  <Palette className="w-4 h-4" /> Color
                </label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    value={config.color}
                    onChange={(e) => setConfig({ ...config, color: e.target.value })}
                    className="h-10 w-12 bg-transparent border-0 rounded cursor-pointer p-0"
                  />
                  <input 
                    type="text" 
                    value={config.color}
                    onChange={(e) => setConfig({ ...config, color: e.target.value })}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-2"><Maximize className="w-4 h-4" /> Size</span>
                  <span className="text-xs text-slate-500">{config.size}px</span>
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="150" 
                  value={config.size}
                  onChange={(e) => setConfig({ ...config, size: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Speed */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Speed</span>
                  <span className="text-xs text-slate-500">{config.speed}s</span>
                </label>
                <input 
                  type="range" 
                  min="0.2" 
                  max="3" 
                  step="0.1" 
                  value={config.speed}
                  onChange={(e) => setConfig({ ...config, speed: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-800" />

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" /> Categories
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                    selectedCategory === cat 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={onReset}
            className="w-full py-2 text-sm text-slate-400 hover:text-white border border-dashed border-slate-700 rounded hover:border-slate-500 transition-colors"
          >
            Reset Defaults
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
