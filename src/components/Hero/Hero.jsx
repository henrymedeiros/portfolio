import HeroCss from "./Hero.module.scss";
import Typewriter from "typewriter-effect";
import ProgrammerSVG from "./ProgrammerSVG.jsx";
import Button from "../Button/Button.jsx";

const Hero = () => {
  
  return (
    <section id="hero" className={HeroCss.HeroSection}>
      <div className={HeroCss.HeroText}>
        <h1 className={`${HeroCss.Title} hero-title`}>Henry Medeiros</h1>
        <h2 className={HeroCss.Subtitle}>
          {/*<Typewriter
            options={{
              strings: ["Desenvolvedor Front-End", "Freelancer", ],
              autoStart: false,
              loop: false,
            }}
          />*/}
          Desenvolvedor Front-End
        </h2>
        <p className={HeroCss.Paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
          beatae ea! Est, fuga quibusdam voluptate laboriosam voluptatem.
        </p>
        <button className="btn btn-primary btn--large">Entre em contato</button>
      </div>

      <ProgrammerSVG color="#6E57E0" />

      <svg className={HeroCss.arrows}>
        <path className={HeroCss.a1} d="M0 0 L30 32 L60 0"></path>
        <path className={HeroCss.a2} d="M0 20 L30 52 L60 20"></path>
        <path className={HeroCss.a3} d="M0 40 L30 72 L60 40"></path>
      </svg>
      </section>
      
    
  );
};

export default Hero;
