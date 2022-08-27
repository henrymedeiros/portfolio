import ProjectModalCss from "./ProjectModal.module.scss";


const ProjectModal = ({setOpenModal}) => {
    return ( 
        <div className={ProjectModalCss.ModalBG}>
            <div className={ProjectModalCss.ModalContainer}>
                <div className={ProjectModalCss.ProjectPreview}>
                    <img src="src\assets\profile.jpg" alt="" />
                </div>
                <div className={ProjectModalCss.ProjectInfo}>
                    <h1>Project Title</h1>
                    <span>tag1</span>
                    <span>tag1</span>
                    <span>tag1</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate neque nesciunt odio in, repellat aliquid dolores quas. Labore repellendus ex excepturi rem. Quibusdam consequatur temporibus ad numquam debitis voluptas culpa!</p>

                
                    <button >Demo</button><button>Código</button>
                </div>
                <button className={ProjectModalCss.CloseBtn} onClick={() => setOpenModal(false)}>close modal</button>
            </div>
            
        </div>
     );
}
 
export default ProjectModal;