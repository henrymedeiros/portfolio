import ContactCss from "./Contact.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  const iconSize = 24;
  return (
    <section id="contact" className={ContactCss.ContactSection}>
      <h1 className="section-title">Contato</h1>
      <p>
        Se você tem uma ideia bacana de projeto, ou apenas deseja trocar uma
        ideia, sinta-se a vontade para se conectar comigo nas redes abaixo!
      </p>
      <div className={ContactCss.SocialIconsList}>
        <a href="https://www.linkedin.com/in/henry-medeiros77/" target="_blank">
          <div className={ContactCss.SocialIcon}>
            {" "}
            <FiLinkedin size={iconSize}></FiLinkedin>
          </div>
        </a>
        <a href="https://github.com/henrymedeiros" target="_blank">
          <div className={ContactCss.SocialIcon}>
            <FiGithub size={iconSize}></FiGithub>
          </div>
        </a>
        <a href="https://www.behance.net/henry_medeiros77" target="_blank">
          <div className={ContactCss.SocialIcon}>
            <FaBehance size={iconSize}></FaBehance>
          </div>
        </a>
        <a href="mailto:henrymedeiros77@gmail.com">
          <div className={ContactCss.SocialIcon}>
            <FiMail size={iconSize}></FiMail>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
