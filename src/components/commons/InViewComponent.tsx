'use client';

import { useRef } from 'react';

import { Variants, motion, useInView } from 'framer-motion';

export interface AnimateComponentProps {
  variants: Variants;
  children?: React.ReactNode;
  className?: string;
  noInViewState: string;
  inViewState: string;
  duration: number;
  delay: number;
  once?: boolean;
}

const AnimateComponent: React.FC<AnimateComponentProps> = ({
  children,
  variants,
  className,
  inViewState,
  noInViewState,
  duration,
  delay,
  once,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all', once });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={noInViewState}
      animate={isInView ? inViewState : noInViewState}
      transition={{
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
