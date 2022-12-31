import ProjectModalCss from "./ProjectModal.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ currentProject, setOpenModal }) => {
  return (
    <div className={ProjectModalCss.ModalBG}>
      <div className={ProjectModalCss.ModalContainer}>
        <div className={ProjectModalCss.ProjectPreview}>
          <img src={currentProject.imgSrc} alt="" />
        </div>
        <div className={ProjectModalCss.ProjectInfo}>
          <span>Projeto #01</span>
          <h1>{currentProject.name}</h1>
          <div className={ProjectModalCss.TagList}>
            {currentProject.tags.map((tag) => {
              return <span className={ProjectModalCss.Tag}>{tag}</span>;
            })}
          </div>

          <h3>Sobre o projeto</h3>
          <p>{currentProject.description}</p>

          <div className={ProjectModalCss.ButtonsContainer}>
            <a target="_blank" href={currentProject.links.demoLink}><button className="btn btn-primary btn--small">Demo</button></a>
            
            <a target="_blank" href={currentProject.links.codeLink}><button className="btn btn-secondary btn--small">Código</button></a>
          </div>
        </div>
        <button
          className={ProjectModalCss.CloseBtn}
          onClick={() => setOpenModal(false)}
        >
          <AiOutlineClose size={30}></AiOutlineClose>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
