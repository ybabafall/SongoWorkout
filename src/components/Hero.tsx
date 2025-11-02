import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { useCallback, useMemo } from "react";
import heroImage from "@/assets/IMG_1013-optimized.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  // Désactiver le parallax sur mobile pour meilleures performances
  const isMobile = useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, []);
  const y = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToPrograms = useCallback(() => {
    const programsElement = document.getElementById('programs');
    if (programsElement) {
      programsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="hero" className="min-h-[100svh] flex items-end pb-12 sm:pb-16 md:pb-20 justify-center bg-black relative overflow-hidden">
      {/* Background image with parallax - optimized */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
        initial={false}
      >
        <div className="absolute inset-0 will-change-transform">
          <img
            src={heroImage}
            alt="Songo Workout Training"
            className="w-full h-full object-cover opacity-70"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style={{
              objectPosition: 'center',
            }}
          />
          {/* Overlays pour contraste et lumière */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-red-950/20"></div>
        </div>
      </motion.div>

      {/* Animated grid overlay with glow */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(251,146,60,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Luminous geometric elements - masqués sur mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 border-2 border-orange-500/20 rotate-45 animate-pulse shadow-[0_0_30px_rgba(249,115,22,0.2)]"></div>
      <div className="hidden sm:block absolute bottom-20 right-20 w-16 h-16 md:w-24 md:h-24 border-2 border-red-600/30 animate-float shadow-[0_0_40px_rgba(220,38,38,0.3)]"></div>
      <div className="hidden sm:block absolute top-1/2 right-10 w-12 h-12 md:w-16 md:h-16 border border-amber-500/40 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]"></div>

      {/* Main content */}
      <motion.div
        className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* Main title */}
        <motion.h1
          className="text-white mb-6 sm:mb-8"
          style={{ textShadow: '0 4px 30px rgba(249, 115, 22, 0.3), 0 2px 40px rgba(220, 38, 38, 0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3 sm:mb-4 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-shimmer-text" style={{ backgroundSize: '200% auto' }}>
            C'est toi et ta volonté
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-body font-semibold bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent tracking-wide uppercase animate-shimmer-text" style={{ backgroundSize: '200% auto' }}>
            Songo Workout
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-orange-500/60"></div>
          <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-orange-500/60"></div>
        </motion.div>

        {/* Subtitle - powerful and direct */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed font-body px-4"
          style={{ textShadow: '0 2px 20px rgba(255, 255, 255, 0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Je forge mon mental. Je sculpte mon corps.
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-neutral-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-body px-4"
          style={{ textShadow: '0 2px 10px rgba(255, 255, 255, 0.1)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Coaching au poids du corps pour transformer ta vie.<br className="hidden sm:block" />
          <span className="sm:inline"> </span>Du lionceau au lion dominant. L'illumination par l'action.
        </motion.p>

        {/* CTAs - Touch targets optimisés (min 48px height) */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => navigate('/checkout')}
            className="group relative min-h-[56px] px-5 sm:px-6 md:px-7 py-4 text-sm sm:text-base font-bold tracking-wide transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.4),0_0_60px_rgba(220,38,38,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6),0_0_80px_rgba(220,38,38,0.4)] rounded-lg sm:hover:scale-105 uppercase w-full sm:w-auto max-w-xs sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Rejoindre la troupe</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </motion.button>
          <motion.button
            onClick={scrollToPrograms}
            className="group relative min-h-[56px] px-5 sm:px-6 md:px-7 py-4 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 overflow-hidden bg-transparent text-white border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 active:scale-95 rounded-lg sm:hover:scale-105 uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] w-full sm:w-auto max-w-xs sm:max-w-none backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Voir les programmes</span>
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Luminous particles - reduced for performance - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-float shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + i * 15}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${7 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;