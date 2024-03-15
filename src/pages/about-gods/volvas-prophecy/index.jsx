import React, {useEffect} from 'react';
import { volvasprophecy } from './index.utils';
import { Helmet } from "react-helmet";
const VolvasProphecy = () => {
    useEffect(() => {
        document.title = "Jardarr | Völuspá";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Völuspá" />
            <meta property="og:description" content="Прорицание вёльвы" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Völuspá</h1>
            <h2 className="poem_title poem_title_sub">Прорицание вёльвы</h2>
            </div>
            {volvasprophecy.map((poem, id) => {
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
                <p>Древнеисландский текст, ред. Theodor Möbius, 1860 г.</p>
                <p>Текст на русском языке в переводе А. И. Корсуна</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default VolvasProphecy;