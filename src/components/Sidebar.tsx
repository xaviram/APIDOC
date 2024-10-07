import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { 
    name: 'Getting Started', 
    href: '/getting-started',
    children: [
      { name: 'Introduction', href: '/getting-started/introduction' },
      { name: 'Authentication', href: '/getting-started/authentication' },
    ]
  },
  { 
    name: 'Endpoints', 
    href: '/endpoints',
    children: [
      { name: 'Users', href: '/endpoints/users' },
      { name: 'Products', href: '/endpoints/products' },
    ]
  },
  { name: 'Error Handling', href: '/error-handling' },
];

const NavItem: React.FC<{ item: NavItem, level: number, closeSidebar: () => void }> = ({ item, level, closeSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleOpen = (e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      closeSidebar();
    }
  };

  const isActive = location.pathname === item.href || (item.children && item.children.some(child => location.pathname === child.href));

  return (
    <li>
      <div 
        onClick={toggleOpen}
        className={`flex items-center justify-between p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer ${level > 0 ? 'ml-4' : ''} ${level > 0 && isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <Link
          to={item.href}
          className="flex-grow"
          onClick={(e) => {
            if (item.children) {
              e.preventDefault();
            } else {
              closeSidebar();
            }
          }}
        >
          {item.name}
        </Link>
        {item.children && (
          <button className="p-2">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <ul className="ml-4 mt-2 space-y-2">
          {item.children.map((child) => (
            <NavItem key={child.href} item={child} level={level + 1} closeSidebar={closeSidebar} />
          ))}
        </ul>
      )}
    </li>
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <nav 
      ref={sidebarRef}
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-auto
      `}
    >
      <button 
        onClick={toggleSidebar}
        className="lg:hidden absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <X size={24} />
      </button>
      <ul className="space-y-2 mt-8 lg:mt-0">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} level={0} closeSidebar={toggleSidebar} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;