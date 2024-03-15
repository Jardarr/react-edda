import React from "react";
import { NavLink } from "react-router-dom";
const NavMenu = ({ items }) => {
  return (
    <div className="header_desktop_menu_list">
      {items.map(({ text, title, link }) => (
        <span key={text}>
          {
            <NavLink title={title} to={link}>
              {text}
            </NavLink>
          }
        </span>
      ))}
    </div>
  );
};

export default NavMenu;
