import { useRect } from '@reach/rect';
import { useTransform, useViewportScroll } from 'framer-motion';
import { createRef } from 'react';
import AnimateBg from '../../common/AnimateBg/AnimateBg';
import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';
import bg from '../../../../public/images/ui-ux-bg.png';
import img from '../../../../public/images/ux-ui.svg';
import Image from 'next/image';

export default function UxUi() {
  const ref = createRef<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const rect = useRect(ref);
  const y = rect ? useTransform(scrollY, [rect?.y, rect?.y + rect?.height], [0, 200]) : useTransform(scrollY, (v) => v / 4);

  return (
    <TransitionSection id="ux-ui" className={`full-view`}>
      <AnimateBg bg={bg.src} ref={ref} y={y} />
      <div className="container-full height-full">
        <div className="flex flex-r-reverse height-full">
          <TextSection
            title="Expertise UX/UI"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="asc grow text-center">
            <Image src={img} width={400} alt="Agilité, devops et cloud" />
          </div>
        </div>
      </div>
    </TransitionSection>
  );
}
