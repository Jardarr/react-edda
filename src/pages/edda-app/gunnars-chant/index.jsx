import React, {useEffect} from 'react';
import { gunnarschant } from './index.utils';
const GunnarsChant = () => {
    useEffect(() => {
        document.title = "Jardarr | Gunnarsslagr";
    }, []);
    return ( 
        <main className="main_wrapper">
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Gunnarsslagr</h1>
            <h2 className="poem_title poem_title_sub">Напев Гуннара</h2>
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
            <div className="notes">
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