import React, {useEffect, useState} from "react";
import "./App.css";

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect( () => {
    function carregaDados(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
    }
    carregaDados();
  },[]);

  return(
    <div className='container'>
      <header>
        <strong>REACT FILMES</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.nome}</strong>
            <p className='sinopse'>{item.sinopse}</p>
            <img src={item.foto}/>            
            <a className="botao" href="">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;