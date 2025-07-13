import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 py-10 animated-bg glass text-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo-kalaavritti.png" alt="Kalaavritti Logo" className="w-20 h-20 mb-2 drop-shadow-xl" />
          <span className="text-lg font-bold tracking-wide uppercase">Kalaavritti</span>
          <span className="text-sm opacity-80">Where Stories Take Shape</span>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-2">Subscribe to our newsletter</span>
          <form className="flex rounded-full overflow-hidden bg-white/80 backdrop-blur px-2 py-1 shadow-lg">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-transparent outline-none text-[#8F0557] font-medium"
            />
            <button type="submit" className="btn-glass px-6 py-2 font-bold text-white gradient-brand hover:scale-105 transition-transform">Subscribe</button>
          </form>
        </div>

        {/* Social Icons and Artisan Highlights */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex space-x-4 mb-2">
            <a href="#" className="btn-glass p-2 hover:scale-110 transition-transform" aria-label="Instagram"><svg width="24" height="24" fill="none" stroke="#8F0557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
            <a href="#" className="btn-glass p-2 hover:scale-110 transition-transform" aria-label="Twitter"><svg width="24" height="24" fill="none" stroke="#0097B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71z"/></svg></a>
            <a href="#" className="btn-glass p-2 hover:scale-110 transition-transform" aria-label="Facebook"><svg width="24" height="24" fill="none" stroke="#8F0557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
          <span className="text-xs opacity-80">Handcrafted by Indian Artisans</span>
        </div>
      </div>
      <div className="absolute bottom-2 right-4 text-xs text-white/70">&copy; {new Date().getFullYear()} Kalaavritti. All rights reserved.</div>
    </footer>
  );
};

export default Footer;