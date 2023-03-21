import './App.css';
import maximilianotrzLogo from './img/maximilianotrz-logo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const actualizarInput = val => {
    setInput(input + val)
  }

  const reiniciarInput = () => (
    setInput('')
  )

  const calcularResultado = () => (
    setInput(evaluate(input))
  )
  

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        src={maximilianotrzLogo} 
        className='freecodecamp-logo'
        alt="Logo de FreeCodeCamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla 
        input={input} />
        <div className="fila">
          <Boton manejarClic={actualizarInput}>1</Boton>
          <Boton manejarClic={actualizarInput}>2</Boton>
          <Boton manejarClic={actualizarInput}>3</Boton>
          <Boton manejarClic={actualizarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={actualizarInput}>4</Boton>
          <Boton manejarClic={actualizarInput}>5</Boton>
          <Boton manejarClic={actualizarInput}>6</Boton>
          <Boton manejarClic={actualizarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={actualizarInput}>7</Boton>
          <Boton manejarClic={actualizarInput}>8</Boton>
          <Boton manejarClic={actualizarInput}>9</Boton>
          <Boton manejarClic={actualizarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={actualizarInput}>=</Boton>
          <Boton manejarClic={actualizarInput}>0</Boton>
          <Boton manejarClic={actualizarInput}>.</Boton>
          <Boton manejarClic={actualizarInput}>/</Boton>
        </div>
        <div className="fila">
        <BotonClear manejarClic={reiniciarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
