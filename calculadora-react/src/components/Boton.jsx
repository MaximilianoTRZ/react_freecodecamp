import {  } from '../stylesheets/Boton.css';

function Boton({ children }) {

  const esOperador = valor => {
    // indica si el boton es un operador o no y se usa para indicar el estilo al boton
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
    <div
    className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trim()}  >
      {/* Children es lo que esta entre las etiquetas de cierre en el componente padre */}
      {children} 
    </div>
  )
}

export default Boton