import HeaderCss from "./Header.module.scss";


const Header = () => {
    return ( 
    <header className={HeaderCss.header}>
       <nav>
        <a href="#" className={HeaderCss.logo}>Henry</a>
        <ul>
            
            <li><a href="#hero">
                Início
            </a></li>
            <li><a href="#about">
                Sobre
            </a></li>
           
                <li>  <a href="#projects" tabindex="1">Projetos</a></li>
            
                <li>  <a href="#contanct">Contato</a></li>
        </ul>
        </nav> 
    </header> 
    );
}
 
export default Header;