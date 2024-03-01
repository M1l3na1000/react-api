//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import { useParams } from 'react-router-dom';

function Detalhes(){ 
    const { id } = useParams();
  const [movie, setMovie] = useState('');  // controlar o estado

  useEffect( () => { //função para consumir a api
    function carregaDados(){
      let url = `https://sujeitoprogramador.com/r-api/?api=filmes${id}`;

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setMovie(json);
      })
    }
    carregaDados();
  },[id]);

  return(
    <div className='container'>
      <article className='post' key={movie.id}>
        <strong className="nome">{movie.nome}</strong>
        <p className='sinopse'>{movie.sinopse}</p>
        <img className='foto' src={movie.foto}/>            
        </article>
    </div>
  );
}
//exportar
export default Detalhes;