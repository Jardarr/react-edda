import React, {useEffect} from 'react';
import { volvasprophecy } from './index.utils';
const VolvasProphecy = () => {
    useEffect(() => {
        document.title = "Jardarr | Völuspá";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Völuspá</h1>
            <h2 class="poem_title poem_title_sub">Прорицание вёльвы</h2>
            </div>
            {volvasprophecy.map((poem, id) => {
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
                <p>Древнеисландский текст, ред. Theodor Möbius, 1860 г.</p>
                <p>Текст на русском языке в переводе А. И. Корсуна</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default VolvasProphecy;