import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { EDDASONGS } from "./../../components/header/HeaderItemList";
import { Helmet } from "react-helmet";

const EddaSongs = () => {
  useEffect(() => {
    document.title = "Jardarr | Eddukvæði";
  }, []);
  return ( 
    <main className="main_wrapper">
      <Helmet>
        <meta property="og:site_name" content="Jardarr | Elder Edda" />
        <meta property="og:title" content="Eddukvæði" />
        <meta property="og:description" content="Эддические песни" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="main_wrapper_text">
        <div className="main_wrapper_text_string">
          <h1 className="poem_title">Eddukvæði</h1>
          <h2 className="poem_title poem_title_sub">Эддические песни</h2>
        </div>
        <div className="main_wrapper_text_links">
          {EDDASONGS.map((item) => (
            <p><NavLink key={item.text} title={item.title} to={item.link}>{item.text}</NavLink></p>
          ))}
        </div>
      </div>
    </main>
  );
}
 
export default EddaSongs;