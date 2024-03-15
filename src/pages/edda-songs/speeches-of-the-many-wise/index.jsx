import React, {useEffect} from 'react';
import { speechesofthemanywise } from './index.utils';
import { Helmet } from "react-helmet";
const SpeechesOfTheManyWise = () => {
    useEffect(() => {
        document.title = "Jardarr | Fjölsvinnsmál";
    }, []);
    return ( 
        <main className="main_wrapper">
        <Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda" />
            <meta property="og:title" content="Fjölsvinnsmál" />
            <meta property="og:description" content="Песнь о Свипдагре (Песнь о Фйольсвидре)" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Fjölsvinnsmál</h1>
            <h2 className="poem_title poem_title_sub">Песнь о Свипдагре<br />(Песнь о Фйольсвидре)</h2>
            </div>
            {speechesofthemanywise.map((poem, id) => {
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
                <p>Текст на русском языке в переводе С. Свириденко</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default SpeechesOfTheManyWise;