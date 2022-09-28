import HeroCss from "./Hero.module.scss";
import Typewriter from "typewriter-effect";
import ProgrammerSVG from "./ProgrammerSVG.jsx";

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
          Desenvolvo layouts responsivos com foco em design, usabilidade e
          experiência do usuário. Clique no botão abaixo para ver alguns dos
          meus projetos.
        </p>
        <button className="btn btn-primary btn--large">Meus projetos</button>
      </div>

      <ProgrammerSVG color="rgb(29, 185, 84)" />
      <div class={HeroCss.mouse}></div>
    </section>
  );
};

export default Hero;
