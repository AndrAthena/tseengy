import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ITransition {
  children: any;
}

export default function TransitionSection(props: any & ITransition) {
  const { children, ...other } = props;
  const { ref, inView } = useInView({
    threshold: 0.65,
    triggerOnce: false,
  });

  const animation = {
    variants: {
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    },
    transition: { delay: 0.2, staggerChildren: 0.2, duration: 1 },
    initial: inView ? 'hidden' : 'visible',
    animate: !inView ? 'hidden' : 'visible',
  };

  return (
    <motion.div ref={ref} {...animation} {...other}>
      {children}
    </motion.div>
  );
}
