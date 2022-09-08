import AboutCss from "./About.module.scss";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section id="about" className={AboutCss.About}>
      <h1 className={`${AboutCss.Title} section-title`}>Sobre mim</h1>
      <div className={AboutCss.Wrapper}>
        <div className={AboutCss.Content}>
          <p>
            Opa, Henry aqui!<span>👋</span>
             Sou desenvolvedor Web com Foco em Front-End. Tenho experiência com projetos
            nas linguagens Javascript e Python.{" "}
          </p>
          <br />
          <p>
            Atualmente sou estudante de Bacharelado em Tecnologia da Informação
            pela Universidade Federal do Rio Grande do Norte e Técnico graduado
            em Informática pelo Instituto Federal de Educação, Ciência e
            Tecnologia do Rio Grande do Norte - IFRN.
          
            
          </p>
          <ul>
              <li>Softskill 1</li>
              <li>Softskill 1</li>
              <li>Softskill 1</li>
            </ul>
          <a href="src\assets\cv.pdf" target="_blank">
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
