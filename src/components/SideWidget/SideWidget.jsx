import SideCss from "./SideWidget.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

const SideWidget = ({ type }) => {
  const iconSize = 26;
  return (
    <motion.div
      className={`${SideCss.SideWidget} ${
        type == "left" ? SideCss.left : "auto"
      } ${type == "right" ? SideCss.right : "auto"} `}
      initial={{ x: type === "left" ? "-25vw" : "25vw" }}
      animate={{ x: 0 }}
      transition={{ duration: "1.5", delay: 0.9 }}
    >
      {type == "left" ? (
        <ul className={SideCss.Social}>
          <li>
            <a href="https://github.com/henrymedeiros" target="_blank">
              <FiGithub size={iconSize}></FiGithub>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/henry-medeiros77/"
              target="_blank"
            >
              <FiLinkedin size={iconSize}></FiLinkedin>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/henry_medeiros77" target="_blank">
              <FaBehance size={iconSize}></FaBehance>
            </a>
          </li>
        </ul>
      ) : (
        <a href="mailto:henrymedeiros77@gmail.com">henrymedeiros77@gmail.com</a>
      )}
    </motion.div>
  );
};

export default SideWidget;
