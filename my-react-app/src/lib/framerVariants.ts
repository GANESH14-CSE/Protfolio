import { Variants } from 'framer-motion';

export const fadeInUp = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const fadeIn = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
    y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
