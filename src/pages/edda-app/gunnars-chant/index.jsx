import React, {useEffect} from 'react';
import { gunnarschant } from './index.utils';
const GunnarsChant = () => {
    useEffect(() => {
        document.title = "Jardarr | Gunnarsslagr";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Gunnarsslagr</h1>
            <h2 class="poem_title poem_title_sub">Напев Гуннара</h2>
            </div>
            {gunnarschant.map((poem, id) => {
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
            <p>Древнеисландский текст, Stóra Edda</p>
            <p>Текст на русском языке в переводе:<br />Vanamær Eyvarsdóttir по подстрочнику Rín Ingvarsdóttir.</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default GunnarsChant;