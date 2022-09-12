import HeroCss from "./Hero.module.scss";
import Typewriter from "typewriter-effect";
import ProgrammerSVG from "./ProgrammerSVG.jsx";
import Button from "../Button/Button.jsx";

const Hero = () => {
  return (
    <section id="hero" className={HeroCss.HeroSection}>
      <div className={HeroCss.HeroText}>
        <h1 className={`${HeroCss.Title} hero-title`}>Henry Medeiros</h1>
        <h3 className={HeroCss.Subtitle}>
          {/*<Typewriter
            options={{
              strings: ["Desenvolvedor Front-End", "Freelancer", ],
              autoStart: false,
              loop: false,
            }}
          />*/}
          Desenvolvedor Front-End
        </h3>
        <p className={HeroCss.Paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
          beatae ea! Est, fuga quibusdam voluptate laboriosam voluptatem.
        </p>
        <button className="btn btn-primary btn--large">Entre em contato</button>
      </div>

      <ProgrammerSVG color="#6E57E0" />
      <div class={HeroCss.mouse}></div>
    </section>
  );
};

export default Hero;
