import ProjectsCss from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      <div className={ProjectsCss.ProjectsGrid}>
        <div className={ProjectsCss.ProjectItem}></div>
        <div className={ProjectsCss.ProjectItem}></div>
        <div className={ProjectsCss.ProjectItem}></div>
        <div className={ProjectsCss.ProjectItem}></div>
        <div className={ProjectsCss.ProjectItem}></div>
        <div className={ProjectsCss.ProjectItem}></div>
      </div>
    </section>
  );
};

export default Projects;
