import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { EDDAAPP } from "./../../components/header/HeaderItemList";
import { Helmet } from "react-helmet";

const EddaApp = () => {
  useEffect(() => {
    document.title = "Jardarr | Viðbætir";
  }, []);
  return ( 
    <main className="main_wrapper">
      <Helmet>
        <meta property="og:site_name" content="Jardarr | Elder Edda" />
        <meta property="og:title" content="Viðbætir" />
        <meta property="og:description" content="Приложения" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Viðbætir</h1>
          <h2 className="poem_title poem_title_sub">Приложения</h2>
        </div>
        <div className="main_wrapper_text_links">
          {EDDAAPP.map((item) => (
            <p><NavLink key={item.text} title={item.title} to={item.link}>{item.text}</NavLink></p>
          ))}
        </div>
      </div>
    </main>
  );
}
 
export default EddaApp;