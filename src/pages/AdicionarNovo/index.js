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
    fetch('https://sujeitoprogramador.com/r-api/?api=filmes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error('Error adding movie');
      })
      .then((json) => {
        console.log('Movie added:', json);
        setMovie((prevMovie) => [...prevMovie, json]);
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
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




  

