import ProjectsCss from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = ({ setCurrentProject, setOpenModal }) => {
  function kebabCaseConvert(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  let projects = [
    {
      name: "Google Clone",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/googleClone.jpg",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["React", "TailwindCSS", "Clone", "Reverse Engineering"],
      description: "Clone das funcionalidades e layout do Google",
      links: {
        demoLink: "https://google-clone-henrymedeiros.vercel.app/",
        codeLink: "https://github.com/henrymedeiros/google-clone",
      },
    },
    {
      name: "Bookmark Landing Page",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/bookmark.jpg",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Landing Page", "TailwindCSS", "Javascript", "Mobile First"],
      description:
        "This is a solution to the Bookmark landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      links: {
        demoLink: "https://henrymedeiros.github.io/bookmark/",
        codeLink: "https://github.com/henrymedeiros/bookmark",
      },
    },
    {
      name: "MyWeatherApp",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/weatherApp.jpg",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Javascript", "CSS3", "Third Party API", "Weather API"],
      description:
        "Web App que disponibiliza informações climáticas da região do usuário. Feito apenas com Javascript puro",
      links: {
        demoLink: "https://henrymedeiros.github.io/weather-app/",
        codeLink: "https://github.com/henrymedeiros/weather-app",
      },
    },

    {
      name: "Personal Portfolio",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/portfolio.jpg",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["React", "Javascript", "SASS", "Responsive", "CSS Modules"],
      description:
        "Meu portfólio pessoal, desenvolvido com React e SASS. O projeto foi desenvolvido com o objetivo de praticar e aprimorar meus conhecimentos e de ser um repositório para demonstrar meus melhores projetos e habilidades.",
      links: {
        demoLink: "",
        codeLink: "https://github.com/henrymedeiros/portfolio",
      },
    },
    {
      name: "Portal de Disciplinas",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/portalDisciplinas.jpg",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Javascript", "Blade Template", "Laravel", "PHP", "Bolsista"],
      description:
        "Projeto no qual atuo como bolsista Front-end e elaboro o design das páginas e desenvolvo os layouts.",
      links: {
        demoLink: "https://portaldasdisciplinas.imd.ufrn.br/",
        codeLink: "",
      },
    },
    {
      name: "Light and Dark Mode",
      get id() {
        return kebabCaseConvert(this.name);
      },
      imgSrc: "/assets/lightDark.png",
      setCurrentProject: setCurrentProject,
      setOpenModal: setOpenModal,
      tags: ["Javascript", "CSS3", "HTML5", "Dark Theme"],
      description:
        "Pequeno projeto para implementar um site com tema opcional de cor (Dark Theme). Aproveitei também para ampliar meus conhecimentos na tecnologia Sass.",
      links: {
        demoLink: "https://henrymedeiros.github.io/light-and-dark-mode/",
        codeLink: "https://github.com/henrymedeiros/light-and-dark-mode",
      },
    },
  ];
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      {/*<h3 style={{ textAlign: "center" }}>
         &#128679; EM CONSTRUÇÃO! &#128679; 
      </h3>*/}
      <div className={ProjectsCss.ProjectsGrid}>
        {projects.map((project, index) => {
          return <ProjectItem {...project} index={index}></ProjectItem>;
        })}
      </div>
    </section>
  );
};

export default Projects;
