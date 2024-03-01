//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'


function Home(){ 
  const [movie, setMovie] = useState([]);  // controlar o estado
  const [filmes, setFilmes] = useState([])

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

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])


  function excluirFilme(id){
    let filtroFilmes = filmes.filter( (item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes) )
    toast.success("Filme removido com sucesso")
  }

  return(
    <div className='container'>
      {movie.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.nome}</strong>
            <img className='foto' src={item.foto}/>            
            <a><Link to={`/detalhes/${item.id}`} className="botao">Acessar</Link></a>
          </article>
        );
      })}
    </div>
  );
}
//exportar
export default Home;