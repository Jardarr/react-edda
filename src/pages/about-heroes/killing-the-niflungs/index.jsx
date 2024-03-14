import React, {useEffect} from 'react';
import { killingtheniflungs } from './index.utils';
const KillingTheNiflungs = () => {
    useEffect(() => {
        document.title = "Jardarr | Dráp Niflunga";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Dráp Niflunga</h1>
            <h2 class="poem_title poem_title_sub">Убийство Нифлунгов</h2>
            </div>
            {killingtheniflungs.map((poem, id) => {
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
 
export default KillingTheNiflungs;