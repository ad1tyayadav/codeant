import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import RepositoryList from '../components/RepositoryList';

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen">
        <Sidebar />
        <RepositoryList />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {isMobileMenuOpen ? (
          <div className="fixed inset-0 bg-white z-50">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <Sidebar isMobile onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between p-4 border-b bg-white">
              <div className="flex items-center gap-2">
                <img src="https://github.com/shadcn.png" alt="Logo" className="w-8 h-8 rounded-full" />
                <span className="font-semibold">CodeAnt AI</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={24} />
              </button>
            </div>
            <RepositoryList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;