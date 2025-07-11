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
                  src="/lovable-uploads/35df65ad-5eb8-4af2-9079-38b33d739970.png" 
                  alt="Kalaavritti Logo" 
                  className="w-full h-full object-contain"
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
                Facebook
              </Link>
              <Link to="/social" className="text-white hover:text-secondary-light transition-colors">
                Instagram
              </Link>
              <Link to="/social" className="text-white hover:text-secondary-light transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/shop" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Shop</Link></li>
              <li><Link to="/trainings" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Trainings</Link></li>
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/blog" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/shop/jewelry" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Jewelry</Link></li>
              <li><Link to="/shop/rakhis" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Rakhis</Link></li>
              <li><Link to="/shop/home-decor" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Home Décor</Link></li>
              <li><Link to="/shop/paintings" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Paintings</Link></li>
              <li><Link to="/shop/gifts" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Gifts</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Returns</Link></li>
              <li><Link to="/faq" className="text-sm opacity-90 hover:opacity-100 transition-opacity">FAQ</Link></li>
              <li><Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Kalaavritti. All rights reserved. Made with ❤️ for Indian artisans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;