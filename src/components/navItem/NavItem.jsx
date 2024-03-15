import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const arrowDown = <FontAwesomeIcon icon={faAngleDown} />;
const arrowUp = <FontAwesomeIcon icon={faAngleUp} />;

const NavItem = ({ text = "", children }) => {
  const [open, setOpen] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header_desktop_menu_items" ref={menuRef}>
      <div className="header_desktop_menu_item">
        <span onClick={() => setOpen(text !== open ? text : "")}>
          {text}
          {children && open === text && arrowDown}
          {children && open !== text && arrowUp}
        </span>
      </div>
      {open && children}
    </div>
  );
};

export default NavItem;
