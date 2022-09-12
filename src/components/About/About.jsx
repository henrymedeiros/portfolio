import AboutCss from "./About.module.scss";
import Skills from "./Skills/Skills";

const Details = ({ summary, emoji, content }) => {
  return (
    <details>
      <summary>
        {summary} {emoji}
      </summary>
      {content}
    </details>
  );
};

const About = () => {
  return (
    <section id="about" className={AboutCss.About}>
      <h1 className={`${AboutCss.Title} section-title`}>Sobre mim</h1>
      <div className={AboutCss.Wrapper}>
        <div className={AboutCss.Content}>
          <h2>
            Opa, Henry aqui!<span>👋</span>
          </h2>
          <p>
            Tenho 21 anos e sou <strong>Desenvolvedor Web</strong> com foco em
            <strong> Frontend</strong>. As linguagens de programação que eu mais
            tenho afinidade são: <strong>Javascript</strong> e
            <strong> Python</strong>.
          </p>
          <br />
          <p>
            Técnico formado em <strong>Informática</strong> e
            <strong> Jogos digitas</strong> e atualmente estou cursando
            bacharelado em <strong>Tecnologia da Informação</strong> na
            Universidade Federal do Rio Grande do Norte.
          </p>
          <br />
          <p>
            Gosto de aprender coisas novas todos os dias, e estou sempre em
            busca de me manter atualizado com as
            <strong> novas tecnologias</strong>.
          </p>
        </div>
        <img className={AboutCss.Picture} src="" alt="My profile picture" />
      </div>
      <Details
        summary={"Skills"}
        emoji={"🙋‍♂‍"}
        content={
          <div className={AboutCss.SkillDetails}>
            <div>
              <h3>Desenvolvimento</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>SASS</li>
                <li>Bootstrap/Tailwind</li>
              </ul>
            </div>

            <div>
              <h3>Ferramentas</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Git/Github</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3>Softskills</h3>
              <ul>
                <li>Teamplayer</li>
                <li>Mente aberta</li>
                <li>Criatividade</li>
                <li>Organização</li>
              </ul>
            </div>
          </div>
        }
      />
      <Details
        summary={"Currículo"}
        emoji={"📜"}
        content={
          <div>
            <span>
              Você pode ver mais detalhes sobre minha trajetória profissional e
              acadêmia acessando o meu <a href="">currículo</a>
            </span>
          </div>
        }
      />

      <Skills></Skills>
    </section>
  );
};

export default About;
