import { useTransform, useViewportScroll } from 'framer-motion';
import AnimateBg from '../components/common/AnimateBg/AnimateBg';
import PageContainer from '../components/common/PageContainer';
import DevMobile from '../components/Home/DevMobile/DevMobile';
import DevOps from '../components/Home/DevOps';
import DevWeb from '../components/Home/DevWeb';
import Hero from '../components/Home/Hero';
import UxUi from '../components/Home/UxUi';
import bg from '../../public/images/home.png';

export default function Home() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, (v) => v * 0.02);

  return (
    <PageContainer meta={{ title: 'Accueil', desc: '' }}>
      <AnimateBg bg={bg.src} y={y} />
      <Hero />
      <DevWeb />
      <DevMobile />
      <DevOps />
      <UxUi />
    </PageContainer>
  );
}
