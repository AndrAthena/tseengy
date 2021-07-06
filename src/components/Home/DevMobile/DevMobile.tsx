import { useRect } from '@reach/rect';
import { useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { createRef, useEffect } from 'react';
import bg from '../../../../public/images/dev-mobile-bg.png';
import img from '../../../../public/images/dev-mobile.svg';
import AnimateBg from '../../common/AnimateBg/AnimateBg';
import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';

export default function DevMobile() {
  const ref = createRef<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const rect = useRect(ref);
  const y = rect ? useTransform(scrollY, [rect?.y, rect?.y + rect?.height], [0, 250]) : useTransform(scrollY, (v) => v / 4);

  return (
    <TransitionSection id="mobile" className={`full-view`}>
      <AnimateBg bg={bg.src} ref={ref} y={y} />
      <div className="container-full height-full">
        <div className="flex flex-r-reverse height-full">
          <TextSection
            title="Développement mobile"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="grow asc text-center">
            <Image src={img} alt="Développement mobile" width={400} />
          </div>
        </div>
      </div>
    </TransitionSection>
  );
}
