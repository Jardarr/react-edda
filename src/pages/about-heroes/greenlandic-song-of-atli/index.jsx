import React, {useEffect} from 'react';
import { greenlandicsongofatli } from './index.utils';
const GreenlandicSongOfAtli = () => {
    useEffect(() => {
        document.title = "Jardarr | Atlakviða in grœnlenzka";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Atlakviða in grœnlenzka</h1>
            <h2 class="poem_title poem_title_sub">Гренландская Песнь об Атли<br />Смерть Атли</h2>
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
            <div class="notes">
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