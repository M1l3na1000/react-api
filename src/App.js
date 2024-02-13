//Hooks React
import React, {useEffect, useState} from "react";
import "./App.css"; //estilo
import logo from './logo.svg';

function App(){ 
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
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Catálogo</a></li>
            <li><a href="">Trailers</a></li>
          </ul>
        </nav>
      </header>

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
      <footer>
        <p>₢Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
//exportar
export default App;