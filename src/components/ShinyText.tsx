import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  baseColor?: string;
  shineColor?: string;
  duration?: number;
  angle?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  className = '',
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  duration = 3,
  angle = 100,
}) => {
  return (
    <motion.span
      className={`inline-block font-bold relative ${className}`}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${baseColor} 0%, ${baseColor} 30%, ${shineColor} 50%, ${baseColor} 70%, ${baseColor} 100%)`,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
      animate={{
        backgroundPosition: ['-150% 0%', '150% 0%'],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: duration,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default ShinyText;
