import TlgrmBtn from "../tlgrmBtn/TlgrmBtn";
import "./style.css";
const Footer = () => {
    return ( 
        <footer className="footer">
        <span className="footer_copyright">&copy; 2024 Designed by Jardarr</span>
        <a className="footer_poetry" href="./pages/ljod.html" title="Поэзия">Ljóð</a>
        <TlgrmBtn tlgrmLink="https://t.me/jardarr"/>
      </footer>
     );
}
 
export default Footer;