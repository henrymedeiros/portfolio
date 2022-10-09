import ProjectsCss from "./Projects.module.scss";
import ProjectItem from "./ProjectItem";

const Projects = ({ setCurrentProject, setOpenModal }) => {
  let projects = [
    {
      name: "Blackjack Javascript",
      imgSrc: "/assets/mockups/test.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["xxxss", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
    {
      name: "MyWeatherApp",
      imgSrc: "/assets/weatherApp.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["xxx", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
    {
      name: "React Memory Game ",
      imgSrc: "/assets/memoryGame.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["xxx", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
    {
      name: "Eduford Site",
      imgSrc: "/assets/eduford.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["xxx", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
    {
      name: "Video Player",
      imgSrc: "/assets/videoPlayer.png",
      setOpenModal: setOpenModal,
      setCurrentProject: setCurrentProject,
      tags: ["xxx", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
    {
      name: "Light and Dark Mode",
      imgSrc: "/assets/lightDark.png",
      setCurrentProject: setCurrentProject,
      setOpenModal: setOpenModal,
      tags: ["xxx", "yyy"],
      description: "A se a gente se pudesse",
      links: { demoLink: "sss", codeLink: "" },
    },
  ];
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      <div className={ProjectsCss.ProjectsGrid}>
        {projects.map((project, index) => {
          return <ProjectItem {...project} index={index}></ProjectItem>;
        })}
      </div>
    </section>
  );
};

export default Projects;
