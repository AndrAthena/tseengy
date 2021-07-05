import { motion, useTransform, useViewportScroll } from 'framer-motion';
import cls from './hero.module.css';
import parallaxBg from '../../../../public/images/hero-bottom-center.png';
import parallaxImg from '../../../../public/images/hero-parallax.svg';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const entrance = {
    variants: {
      visible: {
        y: 0,
      },
      hidden: { y: '100vh' },
    },
    initial: 'hidden',
    animate: 'visible',
    transition: { delay: 0.5 },
  };
  const animate = {
    variants: {
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: 20,
      },
    },
    transition: { delay: 0.5 },
    initial: 'hidden',
    animate: 'visible',
  };

  return (
    <motion.div id="hero" className={`${cls.hero} full-height`} {...entrance}>
      <motion.span style={{ y: y2 }} className={cls.parallax}>
        <Image width={200} height={98} src={parallaxBg} role="presentation" />
      </motion.span>
      <div className="container-full height-full">
        <div className="flex height-full">
          <div className="text-box">
            <motion.h1 {...animate}>Innovation et qualité au service de vos projets numériques</motion.h1>
            <motion.p {...animate}>Nous mettons en oeuvre les technologies et méthodologies de pointe pour atteindre votre objectif.</motion.p>
          </div>
          <motion.div style={{ opacity: 0, y, maxWidth: '75%' }} animate={{ opacity: 1 }} className="grow text-center">
            <Image width={400} src={parallaxImg} role="presentation" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
