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
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label>
                Nome do filme:
                <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Sinopse do filme:
                <textarea
                value={sinopse}
                onChange={(e) => setSinopse(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit" className="area">Adicionar Filme</button>
        </form>
    </div>
  );
}
//exportar
export default AdicionarNovo;




  

