import ContactCss from "./Contact.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={ContactCss.ContactSection}>
      <h1 className="section-title">Contato</h1>

      <p>
        If you want to carry out a project or chat with me, please fill this
        form or reach me on not hesitate to send me an email
      </p>
      <div className="socialIconsFooter">
        <FiMail></FiMail>
        <FiLinkedin></FiLinkedin>
        <FiGithub></FiGithub>
        <FaBehance></FaBehance>
      </div>

      <footer>
        <nav>
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

          
        </nav>
        <div className="copyright">© 2022 - Henry Medeiros</div>
      </footer>
    </section>
  );
};

export default Contact;
