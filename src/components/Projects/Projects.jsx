import ProjectsCss from "./Projects.module.scss";
import ProjectItem from "./ProjectItem"


const Projects = ({setOpenModal}) => {
  let projects = [
    {name: 'Rola', setOpenModal: setOpenModal},
    {name: 'Rola2', setOpenModal: setOpenModal},
    {name: 'Rola2', setOpenModal: setOpenModal},
    {name: 'Rola2', setOpenModal: setOpenModal},
    {name: 'Rola2', setOpenModal: setOpenModal},
    {name: 'Rola2', setOpenModal: setOpenModal}
  ]
  return (
    <section id="projects" className={ProjectsCss.Projects}>
      <h1 className="section-title">Projetos</h1>
      <div className={ProjectsCss.ProjectsGrid}>
        {
          projects.map(project => {
            return <ProjectItem {...project}></ProjectItem>
          })
        }
        
      </div>
    </section>
  );
};

export default Projects;
