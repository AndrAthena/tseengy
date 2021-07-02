import Header from '../components/Header/Header';
import DevWeb from '../components/Home/DevWeb/DevWeb';
import Hero from '../components/Home/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header title="Accueil" desc="Lorem Ipsum" />
      <Hero />
      <DevWeb />
    </>
  );
}
