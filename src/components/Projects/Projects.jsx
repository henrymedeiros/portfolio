import ProjectsCss from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = ({ setCurrentProject, setOpenModal }) => {
  let projects = [
    {
      name: "Google Clone",
      imgSrc: "/assets/googleClone.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["React", "TailwindCSS","Clone", "Reverse Engineering",],
      description: "Clone das funcionalidades e layout do Google",
      links: { demoLink: "https://google-clone-henrymedeiros.vercel.app/", codeLink: "https://github.com/henrymedeiros/google-clone" },
    },
    {
      name: "Bookmark Landing Page",
      imgSrc: "/assets/bookmark.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Landing Page", "TailwindCSS", "Javascript", "Mobile First"],
      description: "This is a solution to the Bookmark landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
      links: { demoLink: "https://henrymedeiros.github.io/bookmark/", codeLink: "https://github.com/henrymedeiros/bookmark" },
    },
    {
      name: "MyWeatherApp",
      imgSrc: "/assets/weatherApp.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Javascript", "CSS3", 'Third Party API', 'Weather API', ],
      description: "Web App que disponibiliza informações climáticas da região do usuário. Feito apenas com Javascript puro",
      links: { demoLink: "https://henrymedeiros.github.io/weather-app/", codeLink: "https://github.com/henrymedeiros/weather-app" },
    },
    
    {
      name: "Blackjack Game",
      imgSrc: "/assets/blackjack.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Javascript", "Game", 'Grid Layout', 'CSS3'],
      description: 'Minha versão do jogo "Blackjack" ou "Vinte-e-um". Este foi o meu primeiro grande projeto utilizando apenas os fundamentos do desenvolvimento web.',
      links: { demoLink: "https://henrymedeiros.github.io/blackjack/", codeLink: "https://github.com/henrymedeiros/blackjack" },
    },
    {
      name: "Video Player",
      imgSrc: "/assets/videoPlayer.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["Javascript", "Video Player"],
      description: "Player de vídeo feito com Javascript puro",
      links: { demoLink: "https://henrymedeiros.github.io/video-player/", codeLink: "https://github.com/henrymedeiros/video-player" },
    },
    {
      name: "Light and Dark Mode",
      imgSrc: "/assets/lightDark.png",
      setCurrentProject: setCurrentProject,
      setOpenModal: setOpenModal,
      tags: ["Javascript", "CSS3", 'HTML5', 'Dark Theme'],
      description: "Pequeno projeto para implementar um site com tema opcional de cor (Dark Theme). Aproveitei também para ampliar meus conhecimentos na tecnologia Sass.",
      links: { demoLink: "https://henrymedeiros.github.io/light-and-dark-mode/", codeLink: "https://github.com/henrymedeiros/light-and-dark-mode" },
    },
  ];
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      <h3 style={{textAlign: 'center'}}>&#128679; EM CONSTRUÇÃO! &#128679;</h3>
      <div className={ProjectsCss.ProjectsGrid}>
        {projects.map((project, index) => {
          return <ProjectItem {...project} index={index}></ProjectItem>;
        })}
      </div>
    </section>
  );
};

export default Projects;
