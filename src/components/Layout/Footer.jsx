import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white p-1 bg-white">
                <img 
                  src="/35df65ad-5eb8-4af2-9079-38b33d739970.png" 
                  alt="Kalaavritti Logo" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kalaavritti</h3>
                <p className="text-sm opacity-80">Where Stories Take Shape</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Celebrating India's vibrant artisan culture through handmade crafts, jewelry, and traditional art forms.
            </p>
            <div className="flex space-x-4">
              <Link to="/social" className="text-white hover:text-secondary-light transition-colors">
                <span className="sr-only">Facebook</span>
                <span aria-hidden="true">Facebook</span>
              </Link>
              <Link to="/social" className="text-white hover:text-secondary-light transition-colors">
                <span className="sr-only">Instagram</span>
                <span aria-hidden="true">Instagram</span>
              </Link>
              <Link to="/social" className="text-white hover:text-secondary-light transition-colors">
                <span className="sr-only">Twitter</span>
                <span aria-hidden="true">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/', text: 'Home' },
                { path: '/shop', text: 'Shop' },
                { path: '/trainings', text: 'Trainings' },
                { path: '/about', text: 'About Us' },
                { path: '/blog', text: 'Blog' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {[
                { path: '/shop/jewelry', text: 'Jewelry' },
                { path: '/shop/rakhis', text: 'Rakhis' },
                { path: '/shop/home-decor', text: 'Home Décor' },
                { path: '/shop/paintings', text: 'Paintings' },
                { path: '/shop/gifts', text: 'Gifts' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { path: '/contact', text: 'Contact Us' },
                { path: '/shipping', text: 'Shipping Info' },
                { path: '/returns', text: 'Returns' },
                { path: '/faq', text: 'FAQ' },
                { path: '/privacy', text: 'Privacy Policy' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Kalaavritti. All rights reserved. Made with ❤️ for Indian artisans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;