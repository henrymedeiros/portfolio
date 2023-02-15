import HeaderCss from "./Header.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const NavLinks = () => {
  return (
    <ul>
      <motion.li
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: "0.75", delay: 0.3 }}
      >
        <a href="#hero">Início</a>
      </motion.li>
      <motion.li
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: "0.75", delay: 0.6 }}
      >
        <a href="#about">Sobre</a>
      </motion.li>

      <motion.li
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: "0.75", delay: 0.9 }}
      >
        <a href="#projects">Projetos</a>
      </motion.li>

      <motion.li
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: "0.75", delay: 1.2 }}
      >
        <a href="#contact">Contato</a>
      </motion.li>
    </ul>
  );
};

const Header = ({ scrollDir }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header
      className={`
        ${
          scrollDir === "scrolling up"
            ? HeaderCss.scrollUp
            : HeaderCss.scrollDown
        }
        
      `}
    >
      <nav className={HeaderCss.mainNav}>
        <motion.a
          href="#"
          className={HeaderCss.logoContainer}
          initial={{ y: "-80px" }}
          animate={{ y: 0 }}
          transition={{ duration: "0.7" }}
        >
          <svg
            width="40"
            height="48"
            viewBox="0 0 40 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_10_89)">
              <path
                d="M6.24232 20.0123V5.00306L-3.05176e-05 0V20.0123L6.24232 25.0061V20.0123Z"
                fill="#0E1212"
              />
              <path
                d="M37.5 5.00306V0L31.2462 5.00306V25.0061L37.5 20.0031V5.00306Z"
                fill="#0E1212"
              />
              <path
                d="M31.2691 29.9908L18.75 40.0061L6.2538 30.0092L6.24232 30.0184V30.0092L-3.05176e-05 25.0061V55.0061L6.24232 60V37.073L14.3294 43.5426L18.75 47.0791L31.2462 37.073V59.9699L37.4781 54.9853H37.5V25.0061L31.2691 29.9908Z"
                fill="#0E1212"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_89">
                <rect width="37.5" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.a>
        <div
          className={`${HeaderCss.burgerMenu} ${
            isActive ? HeaderCss.active : ""
          }`}
          onClick={() => {
            setIsActive(!isActive);
            console.log(isActive);
          }}
        ></div>
        <NavLinks></NavLinks>
      </nav>
      {isActive && (
        <nav className={HeaderCss.mobileActive}>
          <NavLinks></NavLinks>
          <div className={HeaderCss.socialsMobile}></div>
        </nav>
      )}
    </header>
  );
};

export default Header;
