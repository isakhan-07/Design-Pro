import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavClick?: (item: string) => void;
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
  ];

  const handleLinkClick = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(name);
    }
    setMobileMenuOpen(false);
  };

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else if (onNavClick) {
      onNavClick('Contact us');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full pt-6 md:pt-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Circular design with a white border (2px), containing a smaller filled white circle inside, followed by "DesignPro" text */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64CEFB] rounded-lg p-1"
            aria-label="DesignPro Home"
          >
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight select-none">
              DesignPro
            </span>
          </a>

          {/* Desktop Navigation Links in a rounded pill container with gray-700 border */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-5 py-2.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-md shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.name, e)}
                className="text-white/80 hover:text-white text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            {/* Contact us with arrow icon */}
            <button
              onClick={handleContact}
              className="group flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <span>Contact us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

          {/* Mobile hamburger menu toggle (screens smaller than lg) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-gray-700 bg-black/50 text-white/80 hover:text-white backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64CEFB]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 px-4 pt-3 pb-6"
          >
            <div className="max-w-md mx-auto rounded-2xl border border-gray-700 bg-black/90 backdrop-blur-xl p-5 shadow-2xl space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.name, e)}
                  className="block text-white/80 hover:text-white text-base font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-800">
                <button
                  onClick={handleContact}
                  className="w-full flex items-center justify-between text-white/80 hover:text-white text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span>Contact us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
