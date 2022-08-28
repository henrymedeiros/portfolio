import ProjectModalCss from "./ProjectModal.module.scss";

const ProjectModal = ({ setOpenModal }) => {
  return (
    <div className={ProjectModalCss.ModalBG}>
      <div className={ProjectModalCss.ModalContainer}>
        <div className={ProjectModalCss.ProjectPreview}>
          <img src="src\assets\blackjack.png" alt="" />
        </div>
        <div className={ProjectModalCss.ProjectInfo}>
          <span>Projeto #01</span>
          <h1>Project Title</h1>
          <div className={ProjectModalCss.TagList}>
            <span className={ProjectModalCss.Tag}>Bruh</span>
            <span className={ProjectModalCss.Tag}>Bruh</span>
          </div>

          <h3>Sobre o projeto</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            neque nesciunt odio in, repellat aliquid dolores quas. Labore
            repellendus ex excepturi rem. Quibusdam consequatur temporibus ad
            numquam debitis voluptas culpa!
          </p>

          <div className={ProjectModalCss.ButtonsContainer}>
            <button className="btn btn-primary btn--small">Demo</button>
            <button className="btn btn-secondary btn--small">Código</button>
          </div>
        </div>
        <button
          className={ProjectModalCss.CloseBtn}
          onClick={() => setOpenModal(false)}
        >
          close modal
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
