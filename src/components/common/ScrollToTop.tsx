import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.15, y: -8 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-[#7C4DFF] border-2 border-white/20 hover:border-white/50 flex items-center justify-center transition-all shadow-[0_0_30px_rgba(0,229,255,0.6)] group overflow-hidden"
          aria-label="Back to top"
        >
          {/* Inner glow effect on hover */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          
          <Rocket className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 -rotate-45 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
