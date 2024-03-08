import React, {useEffect} from 'react';
import { lokasenna } from './index.utils';
const Lokasenna = () => {
    useEffect(() => {
        document.title = "Jardarr | Lokasenna";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Lokasenna</h1>
            <h2 class="poem_title poem_title_sub">Перебранка Локи</h2>
            </div>
            {lokasenna.map((poem, id) => {
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
 
export default Lokasenna;