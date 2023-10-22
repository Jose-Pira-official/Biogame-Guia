import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import './style.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Guia />
      </>
    );
  }
}

function Guia(){
  return(
    <>
      <h1 className='Titulo_principal'> Guia Oficial Biogame </h1>
      
      <p className='Descripcion'>Esta guia está creada para orientar al usuario en el juego Biogame, contará con una descripción breve dependiendo el momento en tu visita, esta guia sera mas detallada o menos detallada</p>
      <Modulo1 />
    </>
  )
}

function Modulo1() {
  return(
    <>
      <h2 className='Titulo_de_modulo'>Bosque</h2>
      
      <p className='Descripcion'> Una zona del mapa que se designara de alto riesgo hasta que sea explorado, puedes ahorrate el tiempo de explorarlo contratando a un aldeano/bruja/hechicero explorador para que lo haga por ti</p>
    </>
  )
}

export default hot(App);