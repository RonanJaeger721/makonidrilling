import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Menu, X, Droplet } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Cost Estimator', id: 'estimator' },
    { name: 'Completed Work', id: 'projects' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              id="logo-container"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md group-hover:bg-cyan-500 transition-colors duration-300">
                <Droplet className="w-5 h-5 animate-pulse" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">✓</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                  MAKONI
                </h1>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-sky-600 font-mono">
                  Drilling Kwekwe
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1.5'
                      : 'text-slate-600 font-medium'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Navigation Phone and WhatsApp Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="header-call-btn"
                href="tel:0776731708"
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-full transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Now</span>
              </a>
              <a
                id="header-whatsapp-btn"
                href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe%2C%20I%20am%20interested%20in%20obtaining%20a%20borehole%20drilling%20quote."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba5a] rounded-full shadow-sm shadow-[#25d366]/20 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-blue-600 transition-colors p-1.5 rounded-lg hover:bg-slate-100"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-30 lg:hidden overflow-hidden"
          >
            <div className="px-4 py-5 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left px-4 py-3 text-base rounded-xl transition-all ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600'
                      : 'text-slate-700 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div id="mobile-drawer-ctas" className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 pb-2">
                <a
                  id="mobile-call-btn"
                  href="tel:0776731708"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Us</span>
                </a>
                <a
                  id="mobile-whatsapp-btn"
                  href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe%2C%20I%20am%20interested%20in%20obtaining%20a%20borehole%20drilling%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#25d366] rounded-xl"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
