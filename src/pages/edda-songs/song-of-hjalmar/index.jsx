import React, {useEffect} from 'react';
import { songofhjalmar } from './index.utils';
import { Helmet } from "react-helmet";
const SongOfHjalmar = () => {
    useEffect(() => {
        document.title = "Jardarr | Hjálmarskviða";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Hjálmarskviða" />
            <meta property="og:description" content="Песнь о Хьяльмаре" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Hjálmarskviða</h1>
            <h2 className="poem_title poem_title_sub">Песнь о Хьяльмаре</h2>
            </div>
            {songofhjalmar.map((poem, id) => {
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
                <p>Текст на русском языке в переводе Т. Ермолаева</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default SongOfHjalmar;