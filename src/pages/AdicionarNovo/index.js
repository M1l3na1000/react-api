//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo


function AdicionarNovo(){ 
    const [nome, setNome] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [movie, setMovie] = useState([]);  // controlar o estado

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      nome,
      sinopse
    };
    // Add the new recipe to your list of recipes here
    // ...
    // Reset the form fields
    setNome('');
    setSinopse('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do filme:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Sinopse do filme:
        <textarea
          value={sinopse}
          onChange={(e) => setSinopse(e.target.value)}
        />
      </label>
      <button type="submit">Adicionar Filme</button>
    </form>
  );
}
//exportar
export default AdicionarNovo;




  

