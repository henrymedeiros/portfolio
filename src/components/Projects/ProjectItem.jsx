import ProjectsCss from "./Projects.module.scss";
import { AiFillEye } from "react-icons/ai";




const ProjectItem = ({name, imgSrc, setOpenModal}) => {
    
    return ( 
        <div className={ProjectsCss.ProjectItem}>
            
          <figure>
            <img src={imgSrc} alt="" />
            <figcaption>
              
              <h2>{name}</h2>

              <button className="btn btn-secondary-alt btn--small rounded" onClick={() => setOpenModal(true)}>
                <AiFillEye size={20}> </AiFillEye>
                <span> Ver detalhes</span>
    
              </button>
            </figcaption>
            <div className={ProjectsCss.Overlay}></div>
          </figure>
        </div>
     );
}
 
export default ProjectItem;