import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Home, Cloud, HelpCircle, Settings, MessageSquareMore, LogOut } from 'lucide-react';

const Sidebar = ({ isMobile, onClose }) => {

  const menuItems = [
    { icon: <Home />, text: 'Repositories', path: '/dashboard' },
    { icon: <Code2 />, text: 'AI Code Review', path: '/login' },
    { icon: <Cloud />, text: 'Cloud Security', path: '/login' },
    { icon: <HelpCircle />, text: 'How to Use', path: '/login' },
    { icon: <Settings />, text: 'Settings', path: '/login' },
  ];

  const bottomItems = [
    { icon: <MessageSquareMore />, text: 'Support', path: '/login' },
    { icon: <LogOut />, text: 'Logout', path: '/login' },
  ];

  const handleItemClick = () => {
    if (isMobile && onClose) onClose();
  };

  const renderMenuItems = (items) =>
    items.map((item, index) => (
      <li key={index}>
        <NavLink
          to={item.path}
          onClick={handleItemClick}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg ${isActive ? 'bg-[#1570ef] text-white' : 'hover:bg-gray-100'
            } focus:outline-none`}
        >
          {item.icon}
          <span>{item.text}</span>
        </NavLink>
      </li>
    ));

  return (
    <div className={`bg-white h-full flex flex-col ${isMobile ? 'w-full' : 'w-64'} border-r`}>
      {/* Logo */}
      <div className="p-4 border-b">
        <img src="/Codeant.avif" alt="Logo" className="w-full h-auto rounded-full invert" />
      </div>

      {/* Dropdown */}
      <div className="relative inline-block left-12 focus:outline-none">
        <select
          className="px-4 py-2 bg-white border rounded-md text-gray-700 w-40"
        >
          <option value="aditya-kumar">AdityaKumar</option>
        </select>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">{renderMenuItems(menuItems)}</ul>
      </nav>

      {/* Bottom Items */}
      <div className="p-4 border-t">
        <ul className="space-y-2">{renderMenuItems(bottomItems)}</ul>
      </div>
    </div>
  );
};

export default Sidebar;