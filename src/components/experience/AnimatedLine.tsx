'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all', once: true });

  return (
    <motion.div
      ref={ref}
      className="h-20 w-1 bg-teal-500"
      variants={{
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 100 },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.9,
      }}
    />
  );
};

export default AnimatedLine;
