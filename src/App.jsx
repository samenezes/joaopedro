import { useState } from 'react'
import './App.css'

function App() {
 const url = ': https://opentdb.com/api.php?amount=30&category=15 ' 
 .then(response => response.json())

  return (
    <>
    <div id= "Cabecalho"> 
    <h1>
      Cabecalho importante </h1>
      </div>

    <div id= "Conteudo"> </div>

    <div id= "rodape"> 
    <p>
    Joao Pedro de Almeida Isidoro</p>
      </div>
      
    </>
  )
}

export default App
