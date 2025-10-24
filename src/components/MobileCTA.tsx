import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Ne pas afficher sur les pages de paiement
  const hideOnPages = ['/booking', '/checkout'];
  const shouldHide = hideOnPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (shouldHide) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-safe"
        >
          {/* Safe area pour les notch iOS */}
          <button
            onClick={() => navigate('/checkout')}
            className="w-full min-h-[56px] px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-base tracking-wide rounded-full shadow-[0_8px_32px_rgba(249,115,22,0.4),0_4px_16px_rgba(220,38,38,0.3)] active:scale-95 transition-transform duration-150"
          >
            <span className="relative z-10">Rejoindre la meute</span>
          </button>

          {/* Gradient fade au-dessus du bouton */}
          <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
