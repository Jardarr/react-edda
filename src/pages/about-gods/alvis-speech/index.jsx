import React from "react";
import { alvisspeech } from "./index.utils";
const AlvisSpeech = () => {
    return ( 
        <main class="main_wrapper">
      <div class="main_wrapper_text">
        {alvisspeech.map((item) => (
          <>
            <div class={item.classString}>
              <h1 class={item.classTitle}>{item.titleContent}</h1>
              <h2 class={item.classSubTitle}>{item.subTitleContent}</h2>
            </div>
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