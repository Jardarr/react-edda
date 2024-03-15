import React, {useEffect} from 'react';
import { thirdsongofgudrun } from './index.utils';
import { Helmet } from "react-helmet";
const ThirdSongOfGudrun = () => {
    useEffect(() => {
        document.title = "Jardarr | Guðrúnarkviða in þriðja";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Guðrúnarkviða in þriðja" />
            <meta property="og:description" content="Третья Песнь о Гудрун" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Guðrúnarkviða in þriðja</h1>
            <h2 className="poem_title poem_title_sub">Третья Песнь о Гудрун</h2>
            </div>
            {thirdsongofgudrun.map((poem, id) => {
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
 
export default ThirdSongOfGudrun;