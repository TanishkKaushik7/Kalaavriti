import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Mail, Heart, Send, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative w-full mt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="/logo.png" 
                  alt="Kalaavritti Logo" 
                  className="relative w-16 h-16 mb-4 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                KalaaVritti
              </h3>
              <p className="text-pink-200 text-sm font-medium italic">
                Where Stories Take Shape
              </p>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Celebrating the artistry of Indian craftsmanship. Every piece tells a story, every purchase supports an artisan.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Artisans', 'Products', 'Custom Orders', 'Wholesale'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 group-hover:w-2 group-hover:bg-blue-400 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">hello@kalaavritti.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">www.kalaavritti.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
            </h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                />
                <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubscribed}
                className="w-full relative px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubscribed ? (
                    <>
                      <Heart className="w-5 h-5 text-red-200" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Subscribe</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Artisan badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Handcrafted by</span>
              <span className="text-white font-semibold">Indian Artisans</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} Kalaavritti. All rights reserved.</span>
            </div>

            {/* Quality badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full border border-white/20">
                <span className="text-white font-medium">100% Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;