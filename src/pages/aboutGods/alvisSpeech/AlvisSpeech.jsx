import { alvisspeech } from "./AlvisSpeech.utils";
const AlvisSpeech = () => {
    return ( 
        <main class="main_wrapper">
      <div class="main_wrapper_text">
        <div class="main_wrapper_text_string">
          <h1 class="poem_title">Alvíssmál</h1>
          <h2 class="poem_title poem_title_sub">Речи Альвиса</h2>
        </div>
        {alvisspeech.map((item) => (
          <div class={item.class}>
            <div>{item.number}</div>
            <span>{item.contentON}</span>
            <div>{item.number}</div>
            <span>{item.contentRU}</span>
          </div>
        ))}
        <div class="main_wrapper_text_stanza">
          <div>&nbsp;</div>
          <span></span>
          <div>&nbsp;</div>
          <span></span>
        </div>
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