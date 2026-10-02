import './Cursor.css'
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw coordinate vectors tracking the actual cursor location
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics to create that organic elastic jelly lag effect
  const springConfig = { stiffness: 180, damping: 20, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Tracking hovered items to switch size states dynamically
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.project-tile') || 
        target.closest('.filter-btn')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="custom-jelly-cursor"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        // Swaps diameter dimensions and glow properties on button intersections
        width: isHovered ? 64 : 20,
        height: isHovered ? 64 : 20,
        backgroundColor: isHovered ? 'rgba(255, 51, 75, 0.15)' : 'rgba(255, 51, 75, 0.8)',
        borderColor: 'rgba(255, 51, 75, 1)',
        boxShadow: isHovered 
          ? '0 0 24px rgba(255, 51, 75, 0.6)' 
          : '0 0 8px rgba(255, 51, 75, 0.2)',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
    />
  );
}
