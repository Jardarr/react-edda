import { NavLink } from "react-router-dom";
import TlgrmBtn from "../tlgrmBtn/TlgrmBtn";
import "./style.css";
const FooterComponent = () => {
    return ( 
        <footer className="footer">
        <span className="footer_copyright">&copy; 2024 Designed by Jardarr</span>
        <NavLink className="footer_poetry" to="/poetry" title="Поэзия">Ljóð</NavLink>
        <TlgrmBtn tlgrmLink="https://t.me/jardarr"/>
      </footer>
     );
}
 
export const Footer = FooterComponent;