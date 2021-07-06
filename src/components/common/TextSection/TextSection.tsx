import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import picto from '../../../../public/images/heading-picto.svg';

interface IText {
  title: string;
  desc: string;
}

export default function TextSection(props: IText) {
  const { title, desc } = props;
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const imageAnimation = {
    variants: {
      visible: {
        rotate: '360deg',
        transition: { delay: 0.3, duration: 0.7 },
      },
      hidden: {
        rotate: 0,
      },
    },
    initial: !inView ? 'visible' : 'hidden',
    animate: inView ? 'visible' : 'hidden',
  };
  const titleAnimation = {
    variants: {
      visible: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.2, delay: (0.1 * i) / 2 },
      }),
      hidden: {
        x: '50vh',
        opacity: 0,
      },
    },
    initial: !inView ? 'visible' : 'hidden',
    animate: inView ? 'visible' : 'hidden',
  };
  const child = title !== 'undefined' ? title.split('') : [''];

  return (
    <div className="text-box" ref={ref}>
      <h2 className="heading">
        <motion.div {...imageAnimation}>
          <Image src={picto} width={50} height={50} />
        </motion.div>
        {child.map((letter, i) => (
          <motion.span {...titleAnimation} key={i} custom={i} className={i > 0 ? 'letter' : ''}>
            {letter}
          </motion.span>
        ))}
      </h2>
      <p className="text-16">{desc}</p>
    </div>
  );
}
