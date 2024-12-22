import React from 'react';
import { Code2, Cloud, HelpCircle, Settings, MessageSquareMore, LogOut } from 'lucide-react';

const Sidebar = ({ isMobile, onClose }) => {
  const menuItems = [
    { icon: <Code2 />, text: 'Repositories' },
    { icon: <Code2 />, text: 'AI Code Review' },
    { icon: <Cloud />, text: 'Cloud Security' },
    { icon: <HelpCircle />, text: 'How to Use' },
    { icon: <Settings />, text: 'Settings' },
  ];

  const bottomItems = [
    { icon: <MessageSquareMore />, text: 'Support' },
    { icon: <LogOut />, text: 'Logout' },
  ];

  const handleItemClick = () => {
    if (isMobile && onClose) {
      onClose(); // Close the sidebar on mobile after clicking an item.
    }
  };

  return (
    <div className={`bg-white h-full flex flex-col ${isMobile ? 'w-full' : 'w-64'} border-r`}>
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <img
            src="/Codeant.avif"
            alt="Logo"
            className="w-full h-auto rounded-full invert"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={handleItemClick}
                className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t">
        <ul className="space-y-2">
          {bottomItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={handleItemClick}
                className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;