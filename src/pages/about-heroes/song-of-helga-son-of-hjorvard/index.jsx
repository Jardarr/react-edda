import React, {useEffect} from 'react';
import { songofhelgasonofhjorvard } from './index.utils';
const SongOfHelgaSonOfHjorvard = () => {
    useEffect(() => {
        document.title = "Jardarr | Helgakviða Hjörvarðssonar";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Helgakviða Hjörvarðssonar<br />(með Hrímgerðarmálum)</h1>
            <h2 class="poem_title poem_title_sub">Песнь о Хельги, сыне Хьёрварда</h2>
            </div>
            <div class="subtitle"><p>Frá Hjörvarði ok Sigrlinn.</p></div>
            {songofhelgasonofhjorvard.map((poem, id) => {
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
 
export default SongOfHelgaSonOfHjorvard;