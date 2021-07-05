import { useTransform, useViewportScroll } from 'framer-motion';
import PageContainer from '../components/common/PageContainer';
import DevMobile from '../components/Home/DevMobile/DevMobile';
import DevWeb from '../components/Home/DevWeb/DevWeb';
import Hero from '../components/Home/Hero/Hero';

export default function Home() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -250]);

  return (
    <PageContainer meta={{ title: 'Accueil', desc: '' }}>
      <Hero />
      <DevWeb />
      <DevMobile />
    </PageContainer>
  );
}
