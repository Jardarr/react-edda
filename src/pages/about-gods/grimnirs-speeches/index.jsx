import React, { useEffect } from "react";
import { grimnirsspeeches } from "./index.utils";
import { Helmet } from "react-helmet";
const GrimnirsSpeeches = () => {
    useEffect(() => {
        document.title = "Jardarr | Grímnismál";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Grímnismál" />
            <meta property="og:description" content="Речи Гримнира" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Grímnismál</h1>
            <h2 className="poem_title poem_title_sub">Речи Гримнира</h2>
            </div>
            <div className="subtitle"><span>Frá sonum Hrauðungs konungs.</span></div>
            {grimnirsspeeches.map((poem, id) => {
                return (
                    <div key={id} className={poem.class}>
                        <div>{poem.number}</div>
                        <span>{poem.contentON}</span>
                        <div>{poem.number}</div>
                        <span>{poem.contentRU}</span>
                    </div>
                );
            })}
            <div className="notes">
            <span>
                <p>Древнеисландский текст, ред. Guðni Jónsson</p>
                <p>Текст на русском языке в переводе А. И. Корсуна</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default GrimnirsSpeeches;