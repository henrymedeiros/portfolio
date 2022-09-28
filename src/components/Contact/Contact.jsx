import ContactCss from "./Contact.module.scss";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const Contact = () => {
  const iconSize = 24;
  return (
    <section id="contact" className={ContactCss.ContactSection}>
      <h1 className="section-title">Contato</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        praesentium consectetur tempore itaque aliquam numquam quo
      </p>
      <div className={ContactCss.SocialIconsList}>
        <div className={ContactCss.SocialIcon}>
          <FiLinkedin size={iconSize}></FiLinkedin>
        </div>
        <div className={ContactCss.SocialIcon}>
          <FiGithub size={iconSize}></FiGithub>
        </div>
        <div className={ContactCss.SocialIcon}>
          <FaBehance size={iconSize}></FaBehance>
        </div>
        <div className={ContactCss.SocialIcon}>
          <FiMail size={iconSize}></FiMail>
        </div>
      </div>
    </section>
  );
};

export default Contact;
