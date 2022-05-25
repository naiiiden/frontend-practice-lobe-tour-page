import Logo from "../images/Lobe_logo.png";
import Reddit from "../images/reddit.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const Footer = () => {
    return (
        <footer>
            <ul className="footer--logo--container">
                <li><img src={Logo} alt="Lobe's logo"/></li>
                <li>A product by Microsoft.</li>
                <li>All rights reserved.</li>
                <li>© Microsoft 2021</li>
            </ul>
            <nav className="footer--nav">
                <ul className="footer--nav--ul">
                    <li className="footer--nav--ul--heading">About</li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Overview</a></li>
                    <li><a href="">Examples</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
                <ul className="footer--nav--ul">
                    <li className="footer--nav--ul--heading">General</li>
                    <li><a href="">Notice</a></li>
                    <li><a href="">License</a></li>
                    <li><a href="">Press Inquiry</a></li>
                    <li><a href="">Press Images</a></li>
                </ul>
                <div className="footer--resources--socials--container">
                    <ul className="footer--nav--ul">
                        <li className="footer--nav--ul--heading">Resources</li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Tour</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy</a></li>
                    </ul>
                    <ul className="footer--nav--ul--socials">
                        <li><a href=""><img src={Reddit} alt=""/></a></li>
                        <li><a href=""><img src={Twitter} alt=""/></a></li>
                        <li><a href=""><img src={Youtube} alt=""/></a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;