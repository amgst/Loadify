import React, { useState } from 'react';
import { initialLoaders } from './data/initialLoaders';
import { LoaderConfig, LoaderItem, LoaderCategory } from './types';
import Sidebar from './components/Sidebar';
import LoaderCard from './components/LoaderCard';
import CodeModal from './components/CodeModal';
import AIGenerator from './components/AIGenerator';
import { Menu, Wand2, Search } from 'lucide-react';

const App: React.FC = () => {
  const [config, setConfig] = useState<LoaderConfig>({
    color: '#3b82f6',
    size: 64,
    speed: 1.0
  });
  
  const [selectedCategory, setSelectedCategory] = useState<LoaderCategory>('all');
  const [loaders, setLoaders] = useState<LoaderItem[]>(initialLoaders);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Modal states
  const [selectedLoader, setSelectedLoader] = useState<LoaderItem | null>(null);
  const [showAIGenerator, setShowAIGenerator] = useState(false);

  const filteredLoaders = loaders.filter(loader => {
    const matchesCategory = selectedCategory === 'all' || loader.type === selectedCategory;
    const matchesSearch = loader.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReset = () => {
    setConfig({ color: '#3b82f6', size: 64, speed: 1.0 });
  };

  const handleAddNewLoader = (newLoader: LoaderItem) => {
    setLoaders(prev => [newLoader, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      <Sidebar 
        config={config} 
        setConfig={setConfig} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        onReset={handleReset}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <main className="md:ml-72 min-h-screen flex flex-col transition-all duration-300">
        
        {/* Header */}
        <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search loaders..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-sm text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500"
                />
              </div>
            </div>

            <button 
              onClick={() => setShowAIGenerator(true)}
              className="hidden w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-medium shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>AI Design</span>
            </button>
          </div>
        </header>

        {/* Grid */}
        <div className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  {selectedCategory === 'all' ? 'All Loaders' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Loaders`}
                  <span className="ml-2 text-sm font-normal text-slate-500">({filteredLoaders.length})</span>
                </h2>
             </div>

            {filteredLoaders.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredLoaders.map(loader => (
                  <LoaderCard 
                    key={loader.id} 
                    loader={loader} 
                    config={config} 
                    onViewCode={setSelectedLoader}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 opacity-50" />
                </div>
                <p className="text-lg font-medium">No loaders found</p>
                <p className="text-sm">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 px-6 text-center">
            <p className="text-slate-500 text-sm">
                Built with <span className="text-red-500">♥</span> using React, Tailwind & Gemini API.
            </p>
        </footer>
      </main>

      {/* Modals */}
      {selectedLoader && (
        <CodeModal 
          loader={selectedLoader} 
          config={config} 
          onClose={() => setSelectedLoader(null)} 
        />
      )}

      {showAIGenerator && (
        <AIGenerator 
          onClose={() => setShowAIGenerator(false)}
          onGenerate={handleAddNewLoader}
        />
      )}
      
    </div>
  );
};

export default App;
