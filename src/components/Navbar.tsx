
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Demo', path: '/demo' },
    { name: 'Learn', path: '/learn' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'glass shadow-subtle py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-semibold group"
        >
          <span className="relative overflow-hidden rounded-lg flex items-center justify-center w-8 h-8 bg-primary text-white font-display">
            <span className="absolute transition-transform duration-300 group-hover:scale-110">ISL</span>
          </span>
          <span className="transition-colors duration-300 group-hover:text-primary">SignLingo</span>
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-primary focus-ring',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground/80'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/demo"
                className="ml-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
              >
                Try Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
