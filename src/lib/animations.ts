import { Variants } from "framer-motion";

// Optimized animation variants that respect user preferences
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

// Reduced motion variants (no transform, only opacity)
export const reducedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Get appropriate variant based on user preference
export const getAnimationVariant = (prefersReducedMotion: boolean, defaultVariant: Variants) => {
  return prefersReducedMotion ? reducedFadeIn : defaultVariant;
};

// Optimized transition settings
export const fastTransition = {
  duration: 0.4,
  ease: "easeOut"
};

export const normalTransition = {
  duration: 0.6,
  ease: "easeOut"
};

export const slowTransition = {
  duration: 0.8,
  ease: "easeOut"
};
