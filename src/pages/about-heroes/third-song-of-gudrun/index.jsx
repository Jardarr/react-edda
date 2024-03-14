import React, {useEffect} from 'react';
import { thirdsongofgudrun } from './index.utils';
const ThirdSongOfGudrun = () => {
    useEffect(() => {
        document.title = "Jardarr | Guðrúnarkviða in þriðja";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Guðrúnarkviða in þriðja</h1>
            <h2 class="poem_title poem_title_sub">Третья Песнь о Гудрун</h2>
            </div>
            {thirdsongofgudrun.map((poem, id) => {
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
 
export default ThirdSongOfGudrun;