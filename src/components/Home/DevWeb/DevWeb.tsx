import AnimateBg from '../../common/AnimateBg/AnimateBg';
import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';
import bg from '../../../../public/images/dev-web-bg.png';
import img from '../../../../public/images/dev-web.svg';
import { createRef } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';
import { useRect } from '@reach/rect';
import Image from 'next/image';

export default function DevWeb() {
  const ref = createRef<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const rect = useRect(ref);
  const y = rect ? useTransform(scrollY, [rect?.y, rect?.y + rect?.height], [0, -250]) : useTransform(scrollY, (v) => v / 4);

  return (
    <TransitionSection id="web" className={`dev-web full-view`}>
      <AnimateBg ref={ref} bg={bg.src} y={y} />
      <div className="container-full height-full">
        <div className="flex height-full">
          <TextSection
            title="Développement web"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="grow asc text-center">
            <Image src={img} alt="Développement web" width={400} />
          </div>
        </div>
      </div>
    </TransitionSection>
  );
}
