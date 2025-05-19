import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BlobCursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={blobRef}
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-primary-500/30 blur-sm"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: [1, 1.2, 1],
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

export default BlobCursor;