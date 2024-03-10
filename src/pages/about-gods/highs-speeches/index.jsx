import React, {useEffect} from 'react';
import { highsspeeches } from './index.utils';
const HighsSpeeches = () => {
    useEffect(() => {
        document.title = "Jardarr | Hávamál";
    }, []);
    return ( 
        <main className="main_wrapper">
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Hávamál</h1>
            <h2 className="poem_title poem_title_sub">Речи Высокого</h2>
            </div>
            {highsspeeches.map((poem, id) => {
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
 
export default HighsSpeeches;