import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ITransition {
  children: any;
}

export default function TransitionSection(props: any & ITransition) {
  const { children, ...other } = props;
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const animation = {
    variants: {
      visible: {
        opacity: 1,
      },
      transition: {
        delay: 0.1,
        ease: 'backOut',
        duration: 0.75,
        staggerChildren: 0.25,
        delayChildren: 0.85,
        staggerDirection: -1,
      },
      hidden: {
        opacity: 0,
      },
    },
    initial: inView ? 'hidden' : 'visible',
    animate: !inView ? 'hidden' : 'visible',
  };

  return (
    <motion.div ref={ref} {...animation} {...other} style={{ position: 'relative ' }}>
      {children}
    </motion.div>
  );
}
