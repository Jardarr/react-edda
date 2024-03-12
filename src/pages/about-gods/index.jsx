import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SONGOFGODS } from "./../../components/header/HeaderItemList";

const AboutGods = () => {
  useEffect(() => {
    document.title = "Jardarr | Goðakvæði";
  }, []);
  return ( 
    <main className="main_wrapper">
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Goðakvæði</h1>
          <h2 className="poem_title poem_title_sub">Песни о Богах</h2>
        </div>
        <div className="main_wrapper_text_links">
          {SONGOFGODS.map((item) => (
            <p><NavLink key={item.text} title={item.title} to={item.link}>{item.text}</NavLink></p>
          ))}
        </div>
      </div>
    </main>
  );
}
 
export default AboutGods;