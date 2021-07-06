import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';

export default function DevWeb() {
  return (
    <TransitionSection id="web" className={`dev-web full-height`}>
      <div className="container-full height-full">
        <div className="flex height-full">
          <TextSection
            title="Développement web"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="flex aic grow"></div>
        </div>
      </div>
    </TransitionSection>
  );
}
