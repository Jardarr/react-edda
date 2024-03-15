import React, {useEffect} from 'react';
import { songofherver } from './index.utils';
const SongOfHerver = () => {
    useEffect(() => {
        document.title = "Jardarr | Hervararkviða";
    }, []);
    return ( 
        <main className="main_wrapper">
        <div className="main_wrapper_text">
            <div className="main_wrapper_text_string">
            <h1 className="poem_title">Hervararkviða</h1>
            <h2 className="poem_title poem_title_sub">Песнь о Хервёр</h2>
            </div>
            {songofherver.map((poem, id) => {
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
                <p>Древнеисландский текст, ред. Guðni Jónsson</p>
                <p>Текст на русском языке в переводе Т. Ермолаева</p>
            </span>
            </div>
        </div>
        </main>
     );
}
 
export default SongOfHerver;