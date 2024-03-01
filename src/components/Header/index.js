//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import logo from './video-camera-png.png';

function Home(){ 
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
            <li><a><Link to='/'>Home</Link></a></li>
            <li><a><Link to='/adicionarnovo'>Adicionar Novo</Link></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
//exportar
export default Home;