import ContactCss from "./Contact.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  const iconSize = 24;
  return (
    <section id="contact" className={ContactCss.ContactSection}>
      <h1 className="section-title">Contato</h1>
      <p>
        If you want to carry out a project or chat with me, please fill this
        form or reach me on not hesitate to send me an email
      </p>
      <div className={ContactCss.SocialIconsList}>
        <div className={ContactCss.SocialIcon}>
        <FiMail size={iconSize}></FiMail>
        </div>
       
        <div className={ContactCss.SocialIcon}>
        <FiLinkedin size={iconSize}></FiLinkedin>
        </div>
        <div className={ContactCss.SocialIcon}>
        <FiGithub size={iconSize}></FiGithub>
        </div>
        <div className={ContactCss.SocialIcon}>
        <FaBehance size={iconSize}></FaBehance>
        </div>
        
        
      </div>

      <footer>
        <nav>
          <ul>
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#projects" tabindex="1">
              Projetos
            </a>
          </li>
          </ul>
          

          
        </nav>
        <div className="copyright">© 2022 - Henry Medeiros</div>
      </footer>
    </section>
  );
};

export default Contact;
