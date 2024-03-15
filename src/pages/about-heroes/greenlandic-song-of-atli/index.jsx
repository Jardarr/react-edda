import React, {useEffect} from 'react';
import { greenlandicsongofatli } from './index.utils';
const GreenlandicSongOfAtli = () => {
    useEffect(() => {
        document.title = "Jardarr | Atlakviða in grœnlenzka";
    }, []);
    return ( 
        <main className="main_wrapper">
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Atlakviða in grœnlenzka</h1>
            <h2 className="poem_title poem_title_sub">Гренландская Песнь об Атли<br />Смерть Атли</h2>
            </div>
            {greenlandicsongofatli.map((poem, id) => {
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
 
export default GreenlandicSongOfAtli;