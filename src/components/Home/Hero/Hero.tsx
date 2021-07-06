import { motion, useTransform, useViewportScroll } from 'framer-motion';
import cls from './hero.module.css';
import parallaxBg from '../../../../public/images/hero-bottom-center.png';
import parallaxImg from '../../../../public/images/hero-parallax.svg';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const entrance = {
    variants: {
      visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.65, ease: 'backOut', duration: 0.75, staggerChildren: 0.25 },
      },
      hidden: { y: '100vh', opacity: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
  };
  const animate = {
    variants: {
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: 50,
      },
    },
    transition: { delay: 1.3 },
    initial: 'hidden',
    animate: 'visible',
  };

  return (
    <motion.div id="hero" className={`${cls.hero} full-height`} {...entrance}>
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
