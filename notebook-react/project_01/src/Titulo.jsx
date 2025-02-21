/** @format */
import { useState } from "react";

function Titulo({ cor }) {
  const [texto, setTexto] = useState("Um título do estado inicial");
  const [inputText, setInputText] = useState("");

  function handleClick() {
    setTexto(inputText);
  }

  return (
    <div>
      {/* <img width={300} src={urlImg} /> */}
      <h1 style={{ color: cor }}>{texto}</h1>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Mudar</button>
    </div>
  );
}

export default Titulo;
