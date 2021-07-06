import TextSection from '../../common/TextSection';
import TransitionSection from '../../common/TransitionSection';

export default function UxUi() {
  return (
    <TransitionSection id="ux-ui" className={`full-height`}>
      <div className="container-full height-full">
        <div className="flex flex-r-reverse height-full">
          <TextSection
            title="Expertise UX/UI"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam esse beatae iure quibusdam unde, blanditiis omnis quis maxime accusamus
              libero repellat dolore ea soluta vero obcaecati? Tenetur odit soluta ab."
          />
          <div className="flex aic grow"></div>
        </div>
      </div>
    </TransitionSection>
  );
}
