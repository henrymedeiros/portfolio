import ProjectsCss from "./Projects.module.scss";
import { AiFillEye } from "react-icons/ai";

const ProjectItem = (project) => {
  const handleProjectClick = () => {
    project.setOpenModal(true);
    project.setCurrentProject(project);
  };
  return (
    <div className={ProjectsCss.ProjectItem}>
      <figure>
        <img src={project.imgSrc} alt="" />
        <figcaption>
          <h2>{project.name}</h2>

          <button
            className="btn btn-secondary-alt btn--small rounded"
            onClick={() => handleProjectClick()}
          >
            <AiFillEye size={20}> </AiFillEye>
            <span> Ver detalhes</span>
          </button>
        </figcaption>
        <div className={ProjectsCss.Overlay}></div>
      </figure>
    </div>
  );
};

export default ProjectItem;
