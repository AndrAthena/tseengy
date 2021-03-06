import { motion } from 'framer-motion';
import { forwardRef, RefObject } from 'react';

interface IAnimate {
  bg: string;
  y: any;
  ref?: any;
  className?: string;
}

const AnimateBg = forwardRef<HTMLDivElement, IAnimate>(({ bg, y, className }, ref) => (
  <motion.div ref={ref} className={className ? className : 'full-bg'} initial={false} style={{ backgroundImage: `url(${bg})`, y }} />
));

export default AnimateBg;
