import { NavLink } from "react-router-dom";
import TlgrmBtn from "../tlgrmBtn/TlgrmBtn";
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div className="footer_links_item">
          <NavLink
            className="footer_poetry"
            to="/about-gods"
            title="Песни о Богах"
          >
            Goðakvæði
          </NavLink>
          <NavLink
            className="footer_poetry"
            to="/about-heroes"
            title="Песни о Героях"
          >
            Hetjukvæði
          </NavLink>
        </div>
        <div className="footer_links_item">
          <NavLink className="footer_poetry" to="/poetry" title="Поэзия">
            Ljóð
          </NavLink>
          <TlgrmBtn tlgrmLink="https://t.me/jardarr" />
        </div>
        <div className="footer_links_item">
          <NavLink
            className="footer_poetry"
            to="/edda-songs"
            title="Эддические песни, сохранившиеся не в основной рукописи"
          >
            Eddukvæði
          </NavLink>
          <NavLink className="footer_poetry" to="/edda-app" title="Приложения">
            Viðbætir
          </NavLink>
        </div>
      </div>

      <span className="footer_copyright">&copy; 2024 Designed by Jardarr</span>
    </footer>
  );
};

export const Footer = FooterComponent;
