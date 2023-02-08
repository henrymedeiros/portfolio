import ProjectModalCss from "./ProjectModal.module.scss";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

const ProjectModal = ({ currentProject, setOpenModal }) => {
  function getProjectColorBgFromImage(projectId) {
    if (projectId) {
      var img = document.getElementById(projectId);
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
      let pixelData = canvas.getContext("2d").getImageData(20, 20, 1, 1).data;
      return { r: pixelData[0], g: pixelData[1], b: pixelData[2] };
    }
    return null;
  }

  const previewBackgroundRGB = getProjectColorBgFromImage(currentProject.id);

  return (
    <div className={ProjectModalCss.ModalBG}>
      <div className={ProjectModalCss.ModalContainer}>
        <div
          className={ProjectModalCss.ProjectPreview}
          style={
            previewBackgroundRGB != null
              ? {
                  backgroundColor: `rgb(${previewBackgroundRGB.r}, ${previewBackgroundRGB.g}, ${previewBackgroundRGB.b})`,
                  padding: "0",
                }
              : null
          }
        >
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
            <a target="_blank" href={currentProject.links.demoLink}>
              <button className="btn btn-primary btn--small">Demo</button>
            </a>

            <a target="_blank" href={currentProject.links.codeLink}>
              <button className="btn btn-secondary btn--small">Código</button>
            </a>
          </div>
        </div>
        <button
          className={ProjectModalCss.CloseBtn}
          onClick={() => setOpenModal(false)}
        >
          <AiOutlineCloseCircle size={30}></AiOutlineCloseCircle>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
