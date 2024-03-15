import React, {useEffect} from 'react';
import { heidreksriddles } from './index.utils';
import { Helmet } from "react-helmet";
const HeidreksRiddles = () => {
    useEffect(() => {
        document.title = "Jardarr | Heiðreksgátur";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Heiðreksgátur" />
            <meta property="og:description" content="Загадки Хейдрека" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Heiðreksgátur</h1>
            <h2 className="poem_title poem_title_sub">Загадки Хейдрека<br />(Загадки Гестумблинди)</h2>
            </div>
            {heidreksriddles.map((poem, id) => {
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
                <p>Текст на русском языке в переводе Т. В. Топоровой</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default HeidreksRiddles;