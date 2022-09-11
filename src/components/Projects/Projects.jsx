import ProjectsCss from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = ({ setOpenModal }) => {
  let projects = [
    {
      name: "Blackjack Javascript",
      imgSrc: "/assets/blackjack.png",
      setOpenModal: setOpenModal,
    },
    {
      name: "MyWeatherApp",
      imgSrc: "/assets/weatherApp.png",
      setOpenModal: setOpenModal,
    },
    {
      name: "React Memory Game ",
      imgSrc: "/assets/memoryGame.png",
      setOpenModal: setOpenModal,
    },
    {
      name: "Eduford Site",
      imgSrc: "/assets/eduford.png",
      setOpenModal: setOpenModal,
    },
    {
      name: "Video Player",
      imgSrc: "/assets/videoPlayer.png",
      setOpenModal: setOpenModal,
    },
    {
      name: "Light and Dark Mode",
      imgSrc: "/assets/lightDark.png",
      setOpenModal: setOpenModal,
    },
  ];
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      <div className={ProjectsCss.ProjectsGrid}>
        {projects.map((project) => {
          return <ProjectItem {...project}></ProjectItem>;
        })}
      </div>
    </section>
  );
};

export default Projects;
