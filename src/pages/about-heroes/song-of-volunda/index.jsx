import React, {useEffect} from 'react';
import { songofvolunda } from './index.utils';
const SongOfVolunda = () => {
    useEffect(() => {
        document.title = "Jardarr | Völundarkviða";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Völundarkviða</h1>
            <h2 class="poem_title poem_title_sub">Песнь о Вёлунде</h2>
            </div>
            {songofvolunda.map((poem, id) => {
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
 
export default SongOfVolunda;