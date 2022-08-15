import SideCss from "./SideWidget.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {FaBehance} from 'react-icons/fa'

const SideWidget = ({ type }) => {
  return (
    <div
      className={`${SideCss.SideWidget} ${
        type == "left" ? SideCss.left : "auto"
      } ${type == "right" ? SideCss.right : "auto"} `}
    >
      {type == "left" ? (
        <ul className={SideCss.Social}>
          <li>
            <a href=""><FiGithub size={24}></FiGithub></a>
            
          </li>
          <li>
            <a href=""><FiLinkedin size={24}></FiLinkedin></a>
            
          </li>
          <li>
            <a href=""><FiMail size={24}></FiMail></a>
            
          </li>
          <li>
            <a href=""><FaBehance size={24}></FaBehance></a>
            
          </li>
        </ul>
      ) : (
        <a href="mailto:henrymedeiros77@gmail.com">henrymedeiros77@gmail.com</a>
      )}
    </div>
  );
};

export default SideWidget;
