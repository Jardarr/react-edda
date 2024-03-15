import React, {useEffect} from 'react';
import { incitementofgudrun } from './index.utils';
import { Helmet } from "react-helmet";
const IncitementOfGudrun = () => {
    useEffect(() => {
        document.title = "Jardarr | Guðrúnarhvöt";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Guðrúnarhvöt" />
            <meta property="og:description" content="Подстрекательство Гудрун" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Guðrúnarhvöt</h1>
            <h2 className="poem_title poem_title_sub">Подстрекательство Гудрун</h2>
            </div>
            {incitementofgudrun.map((poem, id) => {
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
 
export default IncitementOfGudrun;