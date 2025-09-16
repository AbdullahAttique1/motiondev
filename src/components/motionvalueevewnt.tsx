'use client';

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

export default function ShadowCard() {
  const shadowX = useSpring(0, { stiffness: 150, damping: 20 });
  const shadowY = useSpring(0, { stiffness: 150, damping: 20 });

  const filter = useMotionTemplate`
    drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))
  `;

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get mouse position relative to the center of the card
    const { currentTarget, clientX, clientY } = e;
    const rect = (currentTarget as HTMLElement).getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    shadowX.set(x / 20); // divide to keep small offsets
    shadowY.set(y / 20);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ filter }}
      className="flex h-40 w-64 items-center justify-center rounded-2xl bg-white text-xl shadow-lg"
    >
      Hover me
    </motion.div>
  );
}
