import React, {useEffect} from 'react';
import { odinsravenspell } from './index.utils';
const OdinsRavenSpell = () => {
    useEffect(() => {
        document.title = "Jardarr | Hrafnagaldr Óðins";
    }, []);
    return ( 
        <main class="main_wrapper">
        <div class="main_wrapper_text">
            <div class="main_wrapper_text_string">
            <h1 class="poem_title">Forspjallsljóð<br />(Hrafnagaldr Óðins)</h1>
            <h2 class="poem_title poem_title_sub">Предваряющая песнь,<br />или Воронова ворожба Одина</h2>
            </div>
            {odinsravenspell.map((poem, id) => {
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
                <p>Текст на русском языке в переводе Т. Гимранова</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default OdinsRavenSpell;