import React, {useEffect} from 'react';
import { thefirstsongofhelgatheslayerofhunding } from './index.utils';
const TheFirstSongOfHelgaTheSlayerOfHunding = () => {
    useEffect(() => {
        document.title = "Jardarr | Helgakviða Hundingsbana in fyrri";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Helgakviða Hundingsbana in fyrri</h1>
            <h2 class="poem_title poem_title_sub">Первая Песнь о Хельги убийце Хундинга</h2>
            </div>
            {thefirstsongofhelgatheslayerofhunding.map((poem, id) => {
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
 
export default TheFirstSongOfHelgaTheSlayerOfHunding;