import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonCalculate from './components/BotonCalculate';
import LogoDev from "./components/LogoDev";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const actualizarInput = val => {
    setInput(input + val)
  }

  const reiniciarInput = () => (
    setInput('')
  )

  const calcularResultado = () => {
    if (input ) {
      setInput(evaluate(input.toString()))
    } else {
      alert('Debes ingresar al menos un valor antes de calcular!')
    }
  }
  
  

  return (
    <div className="App">
      <LogoDev />
      <div className="contenedor-calculadora">

        <Pantalla input={input} />

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
          <Boton manejarClic={reiniciarInput}>CE</Boton>
          <Boton manejarClic={actualizarInput}>0</Boton>
          <Boton manejarClic={actualizarInput}>.</Boton>
          <Boton manejarClic={actualizarInput}>/</Boton>
        </div>

        <div className="fila">
          <BotonCalculate manejarClic={calcularResultado}>Calculate</BotonCalculate>
        </div>

      </div>
    </div>
  );
}

export default App;
