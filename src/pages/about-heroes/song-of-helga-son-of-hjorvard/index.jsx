import React, {useEffect} from 'react';
import { songofhelgasonofhjorvard } from './index.utils';
import { Helmet } from "react-helmet";
const SongOfHelgaSonOfHjorvard = () => {
    useEffect(() => {
        document.title = "Jardarr | Helgakviða Hjörvarðssonar";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Helgakviða Hjörvarðssonar" />
            <meta property="og:description" content="Песнь о Хельги, сыне Хьёрварда" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Helgakviða Hjörvarðssonar<br />(með Hrímgerðarmálum)</h1>
            <h2 className="poem_title poem_title_sub">Песнь о Хельги, сыне Хьёрварда</h2>
            </div>
            <div className="subtitle"><p>Frá Hjörvarði ok Sigrlinn.</p></div>
            {songofhelgasonofhjorvard.map((poem, id) => {
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
 
export default SongOfHelgaSonOfHjorvard;