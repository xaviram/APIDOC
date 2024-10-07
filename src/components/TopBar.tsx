import React, { useState } from 'react';
import { Sun, Moon, Search, Globe, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TopBarProps {
  companyName: string;
  currentPage: string;
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ companyName, currentPage, toggleSidebar }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden mr-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">{companyName}</h1>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <span className="hidden sm:inline">{currentPage}</span>
      </div>
      <div className="flex items-center space-x-4">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 rounded-md p-2"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700"
          />
          <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;