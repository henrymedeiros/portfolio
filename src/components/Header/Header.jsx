import HeaderCss from "./Header.module.scss";


const Header = () => {
    return ( 
    <header className={HeaderCss.header}>
       <nav>
        <a href="#" className={HeaderCss.logo}>Henry</a>
        <ul>
            
            <li><a href="#">
                Início
            </a></li>
            <li><a href="#">
                Sobre
            </a></li>
            <a href="#">
                <li>Projetos</li>
            </a>
            <a href="#">
                <li>Contato</li>
            </a>
        </ul>
        </nav> 
    </header> 
    );
}
 
export default Header;