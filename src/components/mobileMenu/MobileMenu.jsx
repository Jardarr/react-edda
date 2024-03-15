import NavItem from "../navItem/NavItem";
import NavMenu from "../navMenu/NavMenu";
import {
  EDDAAPP,
  EDDASONGS,
  SONGOFGODS,
  SONGOFHEROES,
} from "./../header/HeaderItemList";

const MobileMenu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className="header_mobile_menu_background-g"
        style={{ display: isOpen ? "flex" : "none" }}
      />
      <div
        className="header_mobile_menu_background-b"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <nav className="header_mobile_menu_item">
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
    </>
  );
};

export default MobileMenu;
