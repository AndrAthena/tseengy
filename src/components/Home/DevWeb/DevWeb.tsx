import Image from 'next/image';
import picto from '../../../../public/images/heading-picto.svg';
import TransitionSection from '../../common/TransitionSection';
import cls from './devweb.module.css';

export default function DevWeb() {
  return (
    <TransitionSection id="web" className={`${cls['dev-web']} full-height`}>
      <div className="container-full height-full">
        <div className="flex height-full">
          <div className="text-box">
            <h2 className="heading">
              <Image src={picto} width={50} height={50} />
              <span>Développement web</span>
            </h2>
            <p className="text-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab.
            </p>
          </div>
          <div className="flex aic grow"></div>
        </div>
      </div>
    </TransitionSection>
  );
}
