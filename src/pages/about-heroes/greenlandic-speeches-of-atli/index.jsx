import React, {useEffect} from 'react';
import { greenlandicspeechesofatli } from './index.utils';
const GreenlandicSpeechesOfAtli = () => {
    useEffect(() => {
        document.title = "Jardarr | Atlamál in grænlenzku";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Atlamál in grænlenzku</h1>
            <h2 class="poem_title poem_title_sub">Гренландские Речи Атли</h2>
            </div>
            {greenlandicspeechesofatli.map((poem, id) => {
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
 
export default GreenlandicSpeechesOfAtli;