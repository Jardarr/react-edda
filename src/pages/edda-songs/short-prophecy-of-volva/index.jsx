import React, {useEffect} from 'react';
import { shortprophecyofvolva } from './index.utils';
import { Helmet } from "react-helmet";
const ShortProphecyOfVolva = () => {
    useEffect(() => {
        document.title = "Jardarr | Völuspá in skamma";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Völuspá in skamma" />
            <meta property="og:description" content="Краткое Прорицание вёльвы" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Völuspá in skamma</h1>
            <h2 className="poem_title poem_title_sub">Краткое Прорицание вёльвы</h2>
            </div>
            {shortprophecyofvolva.map((poem, id) => {
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
 
export default ShortProphecyOfVolva;