import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SONGOFHEROES } from "./../../components/header/HeaderItemList";
import { Helmet } from "react-helmet";

const AboutHeroes = () => {
  useEffect(() => {
    document.title = "Jardarr | Hetjukvæði";
  }, []);
  return ( 
    <main className="main_wrapper">
      <Helmet>
        <meta property="og:site_name" content="Jardarr | Elder Edda" />
        <meta property="og:title" content="Hetjukvæði" />
        <meta property="og:description" content="Песни о Героях" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Hetjukvæði</h1>
          <h2 className="poem_title poem_title_sub">Песни о Героях</h2>
        </div>
        <div className="main_wrapper_text_links">
          {SONGOFHEROES.map((item) => (
            <p><NavLink key={item.text} title={item.title} to={item.link}>{item.text}</NavLink></p>
          ))}
        </div>
      </div>
    </main>
  );
}
 
export default AboutHeroes;