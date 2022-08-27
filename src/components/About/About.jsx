import AboutCss from "./About.module.scss";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section id="about" className={AboutCss.About}>
      <h1 className={`${AboutCss.Title} section-title`}>Sobre mim</h1>
      <div className={AboutCss.Wrapper}>
        <div className={AboutCss.Content}>
          <p>
            Desenvolvedor Web com Foco em Front-End. Experiência com projetos
            nas linguagens Javascript e Python.{" "}
          </p>
          <br />
          <p>
            Atualmente sou estudante de Bacharelado em Tecnologia da Informação
            pela Universidade Federal do Rio Grande do Norte, Técnico graduado
            em Informática pelo Instituto Federal de Educação, Ciência e
            Tecnologia do Rio Grande do Norte - IFRN.
            <br /><br />
            <ul>
              <li>Softskill 1</li>
              <li>Softskill 1</li>
              <li>Softskill 1</li>
            </ul>
          </p>
          <a href="src\assets\cv.pdf" download>
            <button className="btn btn-primary btn--large">
              
              Baixar cúrriculo
            </button>
          </a>
        </div>
        <img
          className={AboutCss.Picture}
          src="src\assets\profile.jpg"
          alt="My profile picture"
        />
      </div>
      <Skills></Skills>
    </section>
  );
};

export default About;
