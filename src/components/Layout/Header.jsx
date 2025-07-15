import React, { useState } from 'react';
import { Menu, Search, User, ShoppingBag, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const items = []; // Mock cart items - replace with actual cart context

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gradient-to-r from-pink-500/10 to-blue-500/10 m-0 p-0">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-2  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            <img
              src="/logo.png"
              alt="Kalaavritti Logo"
              className="relative h-23 w-auto px-5 xobject-contain "
            />
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="relative group px-4 py-2 text-sm font-semibold text-gray-700 hover:text-pink-600 transition-all duration-300 rounded-lg hover:bg-pink-50"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <Search className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            {/* Search dropdown */}
            {isSearchOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 transform transition-all duration-300 animate-in slide-in-from-top-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  Popular searches: Pottery, Textiles, Jewelry
                </div>
              </div>
            )}
          </div>

          {/* User */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group">
            <User className="h-5 w-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
          </button>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
          >
            <ShoppingBag className="h-5 w-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 py-4 bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                className="group relative px-4 py-3 text-sm font-semibold text-gray-700 hover:text-pink-600 transition-all duration-300 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-pink-500 to-blue-500 group-hover:h-full transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile search */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </nav>
      </div>

      {/* Subtle animated underline */}
      <div className="h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30">
        <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
      </div>
    </header>
  );
};

export default Header;