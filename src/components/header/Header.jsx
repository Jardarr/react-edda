import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../img/J-logo.png";
import NavItem from "../navItem/NavItem";
import NavMenu from "../navMenu/NavMenu";
import { EDDAAPP, EDDASONGS, SONGOFGODS, SONGOFHEROES } from "./HeaderItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "../mobileMenu/MobileMenu";

const hamburger = <FontAwesomeIcon icon={faBars} />;
const xmark = <FontAwesomeIcon icon={faXmark} />;
const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header_logo">
        <NavLink to="/">
          <img src={logo} alt="Jardarr logo" title="Jardarr logo" />
        </NavLink>
      </div>
      <div className="header_desktop_menu">
        <nav>
          <NavItem text="Goðakvæði">
            <NavMenu items={SONGOFGODS} />
          </NavItem>
          <NavItem text="Hetjukvæði">
            <NavMenu items={SONGOFHEROES} />
          </NavItem>
          <NavItem text="Eddukvæði">
            <NavMenu items={EDDASONGS} />
          </NavItem>
          <NavItem text="Viðbætir">
            <NavMenu items={EDDAAPP} />
          </NavItem>
        </nav>
      </div>
      <div
        className="header_mobile_menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div className="header_mobile_menu_hamburger">
          {menuOpen ? xmark : hamburger}
        </div>
      </div>
      <MobileMenu isOpen={menuOpen} />
    </header>
  );
};

export const Header = HeaderComponent;
