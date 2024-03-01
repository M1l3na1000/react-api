//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import { toast } from 'react-toastify'


function AdicionarNovo(){ 
  const [movie, setMovie] = useState([]);  // controlar o estado
  const [filmes, setFilmes] = useState([]); 
  useEffect( () => { //função para consumir a api
    function carregaDados(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setFilmes(json);
      })
    }
    carregaDados();
  },[]);


  const [newPost, setNewPost] = useState({
    nome: '',
    sinopse: '',
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie([...movie, newPost]);
    // add API call here to update the recipe API
    console.log('New recipe added:', newPost);
    setNewPost({
      nome: '',
      sinopse: '',
    });
  };

  const url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

  

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label>
                Nome do filme:
                <input
                name='nome'
                type="text"
                value={newPost.nome}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Sinopse do filme:
                <input
                name='sinopse'
                type="text"
                value={newPost.sinopse}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button type="submit" className="area">Adicionar Filme</button>
        </form>
        <article className="post">
        <h1>Meus filmes</h1>
        {filmes.map((item) => { //percorrendo a api
        return(
          <article className="meusfilmes" key={item.id}>
            <li>{item.nome} - {item.sinopse}</li>
          </article>
        );
      })}
        <ul>
        {movie.map((movie, index) => (
          <li key={index}>
            {movie.nome} - {movie.sinopse} 
          </li>
        ))}
      </ul>
      </article>
    </div>
  );
}
//exportar
export default AdicionarNovo;




  

