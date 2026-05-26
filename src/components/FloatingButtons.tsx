import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      
      {/* Back to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-full shadow-md transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Glowing WhatsApp Button with Pulsing Dot */}
      <motion.a
        id="floating-whatsapp-btn"
        href="https://wa.me/263776731708?text=Hello%20Makoni%20Drilling%20Kwekwe%21%20I%20am%2520interested%20in%20arranging%20a%20borehole%20drilling%20estimate%20or%20site%20visit."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
          delay: 0.5
        }}
        onClick={() => setShowNotificationBadge(false)}
        className="relative p-4.5 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 bg-[#25d366]/40 rounded-full animate-ping -z-10 group-hover:hidden" />
        
        <MessageSquare className="w-6.5 h-6.5 fill-white text-white" />

        {/* Pulse Notification Badge */}
        {showNotificationBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-550 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-black text-white font-mono animate-bounce shadow-md">
            1
          </span>
        )}
      </motion.a>
    </div>
  );
}
