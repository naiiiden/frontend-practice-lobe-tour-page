import Logo from "../images/Lobe_logo.png";
import Reddit from "../images/reddit.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const Footer = () => {
    return (
        <footer>
            <ul className="footer--logo--container">
                <li><img src={Logo} alt="Lobe's logo" className="footer--logo"/></li>
                <li>A product by Microsoft.</li>
                <li>All rights reserved.</li>
                <li>© Microsoft 2021</li>
            </ul>
            <nav className="footer--nav">
                <div className="footer--nav--ul--subcontainer">
                    <ul className="footer--nav--ul">
                        <li className="footer--nav--ul--heading">About</li>
                        <li><a href="https://www.lobe.ai/tour#signup">Download</a></li>
                        <li><a href="https://www.lobe.ai/">Overview</a></li>
                        <li><a href="https://www.lobe.ai/examples">Examples</a></li>
                        <li><a href="https://www.lobe.ai/blog">Blog</a></li>
                    </ul>
                    <ul className="footer--nav--ul">
                        <li className="footer--nav--ul--heading">General</li>
                        <li><a href="https://www.lobe.ai/NOTICE.txt">Notice</a></li>
                        <li><a href="https://www.lobe.ai/license">License</a></li>
                        <li><a href="https://news.microsoft.com/microsoft-public-relations-contacts/">Press Inquiry</a></li>
                        <li><a href="https://www.lobe.ai/assets/press/lobe-press-images.zip">Press Images</a></li>
                    </ul>
                </div>
                <div className="footer--resources--socials--container">
                    <ul className="footer--nav--ul">
                        <li className="footer--nav--ul--heading">Resources</li>
                        <li><a href="https://www.lobe.ai/docs/welcome/welcome">Help</a></li>
                        <li><a href="https://www.lobe.ai/tour">Tour</a></li>
                        <li><a href="mailto:lobeai@microsoft.com">Contact</a></li>
                        <li><a href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy</a></li>
                    </ul>
                    <ul className="footer--nav--ul--socials">
                        <li><a href="https://reddit.com/r/lobe"><img src={Reddit} alt=""/></a></li>
                        <li><a href="https://twitter.com/lobe_ai"><img src={Twitter} alt=""/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw"><img src={Youtube} alt=""/></a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;