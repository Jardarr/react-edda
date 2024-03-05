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
        {alvisspeech.map((item) => (
          <>
            <div class={item.classStanza}>
              <div>{item.number}</div>
              <span>{item.contentON}</span>
              <div>{item.number}</div>
              <span>{item.contentRU}</span>
            </div>
            <div class={item.classNotes}>
              <span>{item.autors}</span>
            </div>
          </>
        ))}
      </div>
    </main>
     );
}
 
export default AlvisSpeech;