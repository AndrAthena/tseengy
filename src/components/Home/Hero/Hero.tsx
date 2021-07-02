import cls from './hero.module.css';

export default function Hero() {
  return (
    <div id="hero" className={`${cls.hero} full-height`}>
      <div className="container-full height-full">
        <div className="flex height-full">
          <div className="text-box">
            <h1>Innovation et qualité au service de vos projets numériques</h1>
            <p>Nous mettons en oeuvre les technologies et méthodologies de pointe pour atteindre votre objectif.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
