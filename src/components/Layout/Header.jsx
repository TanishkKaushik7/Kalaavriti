import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-xl border-b border-[#0097B2]/20 m-0 p-0">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/logo-kalaavritti.png"
            alt="Kalaavritti Logo"
            className="h-20 w-auto object-contain"
            style={{marginBottom: 0}}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-semibold text-[#8F0557] hover:text-[#0097B2] transition-colors px-2 py-1 rounded-lg hover:bg-[#0097B2]/10"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-[#0097B2]" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-[#8F0557]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5 text-[#0097B2]" />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t pt-4 bg-white shadow-xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg font-semibold text-[#8F0557] hover:text-[#0097B2] transition-colors px-4 py-2 rounded-lg hover:bg-[#0097B2]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;