import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';

export default function DevOps() {
  return (
    <TransitionSection id="devops" className={`full-height`}>
      <div className="container-full height-full">
        <div className="flex height-full">
          <TextSection
            title="Agilité, devops et cloud"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="flex aic grow"></div>
        </div>
      </div>
    </TransitionSection>
  );
}
