import React, { useEffect, useRef } from 'react';
import { LoaderItem, LoaderConfig } from '../types';
import { Copy, Code } from 'lucide-react';

interface LoaderCardProps {
  loader: LoaderItem;
  config: LoaderConfig;
  onViewCode: (loader: LoaderItem) => void;
}

const LoaderCard: React.FC<LoaderCardProps> = ({ loader, config, onViewCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // Inject styles dynamically into the document head (or a shadow root if we had one, but scoped styles work here)
  useEffect(() => {
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      styleRef.current.id = `style-${loader.id}`;
      document.head.appendChild(styleRef.current);
    }
    styleRef.current.textContent = loader.css;

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [loader.css, loader.id]);

  return (
    <article className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1" role="listitem">
      <div 
        className="aspect-square flex items-center justify-center p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative"
        style={{
          // @ts-ignore - CSS variables
          '--loader-color': config.color,
          '--loader-size': `${config.size}px`,
          '--loader-speed': `${config.speed}s`,
        } as React.CSSProperties}
        aria-label={`${loader.name} loader animation preview`}
      >
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: loader.html }} aria-hidden="true" />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
            <button 
              onClick={() => onViewCode(loader)}
              className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50 flex items-center gap-2"
              aria-label={`View code for ${loader.name}`}
            >
              <Code className="w-4 h-4" aria-hidden="true" /> Get Code
            </button>
        </div>
        
        {loader.isAiGenerated && (
            <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full" aria-label="AI Generated">
                AI Generated
            </span>
        )}
      </div>
      
      <header className="p-4 border-t border-slate-700/50">
        <h3 className="text-sm font-medium text-slate-200 truncate">{loader.name}</h3>
      </header>
    </article>
  );
};

export default LoaderCard;
