import HeaderCss from "./Header.module.scss";

const Header = ({ scrollDir }) => {
  return (
    <header
      className={
        scrollDir === "scrolling up" ? HeaderCss.scrollUp : HeaderCss.scrollDown
      }
    >
      <nav>
        <a href="#" className={HeaderCss.logo}>
          Henry
        </a>
        <ul>
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#projects" tabIndex="1">
              Projetos
            </a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
