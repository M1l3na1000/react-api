//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo


function AdicionarNovo(){ 
  const [movie, setMovie] = useState([]);  // controlar o estado

  useEffect( () => { //função para consumir a api
    function carregaDados(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setMovie(json);
      })
    }
    carregaDados();
  },[]);

  return(
    <div className='container'>
      {movie.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.nome}</strong>
            <p className='sinopse'>{item.sinopse}</p>
            <img className='foto' src={item.foto}/>            
            <a className="botao" href="">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}
//exportar
export default AdicionarNovo;