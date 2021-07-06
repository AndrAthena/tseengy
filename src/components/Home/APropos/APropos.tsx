import { motion, useTransform, useViewportScroll } from 'framer-motion';
import cls from './apropos.module.css';
import tseengy from '../../../../public/images/tseengy.png';
import Image from 'next/image';
import { createRef } from 'react';
import { useRect } from '@reach/rect';

export default function APropos() {
  const ref = createRef<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const rect = useRect(ref);
  const y = rect ? useTransform(scrollY, [rect?.y, rect?.y + rect?.height], [0, 100]) : useTransform(scrollY, (v) => v);

  return (
    <motion.div id="apropos" className={`${cls.apropos} full-view`}>
      <div className="container-full height-full">
        <div className="flex height-full">
          <motion.div className={cls.box} ref={ref} initial={false} style={{ x: y }}>
            <h2>Inspiré du mot malgache “tsingy” qui veut dire “pointu” reflète :</h2>
            <p>Notre aspiration à utiliser les technologies et méthodologies de pointe afin de vous accompagner jusqu’au succès de votre projet</p>
            <p>L’état d’esprit de nos équipes qui sont très intelligentes afin de blalbalbalbal (en cours de reflexion)….innovant et de qualité</p>
          </motion.div>

          <div className={cls.image}>
            <Image src={tseengy} alt="Tseengy" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
