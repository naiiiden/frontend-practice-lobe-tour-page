import Logo from "../images/Lobe_logo.png";
import Open from "../images/Hamburger.svg";
import Close from "../images/Close.svg";

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="Lobe's logo" className="header--logo"/>
            <button aria-label="toggle navigation" className="header--menu--button">
                <img src={Open} alt=""/>
            </button>
            <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li><a href="">Overview</a></li>
                    <li><a href="">Examples</a></li>
                    <li><a href="" className="header--nav--ul--tour--link">Tour</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="" className="header--nav--ul--download--link">Download</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;