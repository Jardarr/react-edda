import React from "react";
import { alvisspeech } from "./index.utils";
const AlvisSpeech = () => {
  return ( 
    <main class="main_wrapper">
      <div class="main_wrapper_text">
        <div class="main_wrapper_text_string">
          <h1 class="poem_title">Alvíssmál</h1>
          <h2 class="poem_title poem_title_sub">Речи Альвиса</h2>
        </div>
        {alvisspeech.map((poem) => (
          <div key={poem.id} class={poem.classStanza}>
            <div>{poem.number}</div>
            <span>{poem.contentON}</span>
            <div>{poem.number}</div>
            <span>{poem.contentRU}</span>
          </div>
        ))}
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
 
export default AlvisSpeech;