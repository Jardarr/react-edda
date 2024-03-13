import React, {useEffect} from 'react';
import { secondsongofhelgatheslayerofhunding } from './index.utils';
const SecondSongOfHelgaTheSlayerOfHunding = () => {
    useEffect(() => {
        document.title = "Jardarr | Helgakviða Hundingsbana önnur";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Helgakviða Hundingsbana önnur</h1>
            <h2 class="poem_title poem_title_sub">Вторая Песнь о Хельги убийце Хундинга</h2>
            </div>
            <div class="subtitle"><p>О Вёльсунгах</p></div>
            {secondsongofhelgatheslayerofhunding.map((poem, id) => {
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
 
export default SecondSongOfHelgaTheSlayerOfHunding;