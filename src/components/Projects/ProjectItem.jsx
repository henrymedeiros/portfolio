import ProjectsCss from "./Projects.module.scss";
import { AiFillEye } from "react-icons/ai";




const ProjectItem = ({name, setOpenModal}) => {
    
    return ( 
        <div className={ProjectsCss.ProjectItem}>
            
          <figure>
            <img src="src\assets\profile.jpg" alt="" />
            <figcaption>
              <h2>{name}</h2>

              <button className="btn btn-secondary btn--small rounded" onClick={() => setOpenModal(true)}>
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