import { useTransform, useViewportScroll } from 'framer-motion';
import PageContainer from '../components/common/PageContainer';
import APropos from '../components/Home/APropos';
import DevMobile from '../components/Home/DevMobile/DevMobile';
import DevOps from '../components/Home/DevOps';
import DevWeb from '../components/Home/DevWeb';
import Hero from '../components/Home/Hero';
import UxUi from '../components/Home/UxUi';

export default function Home() {
  return (
    <PageContainer meta={{ title: 'Accueil', desc: '' }}>
      <Hero />
      <DevWeb />
      <DevMobile />
      <DevOps />
      <UxUi />
      <APropos />
    </PageContainer>
  );
}
