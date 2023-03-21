import '../stylesheets/Boton.css';

function Boton({ children, manejarClic }) {

  const esOperador = valor => {
    // indica si el boton es un operador o no y se usa para indicar el estilo al boton
    return isNaN(valor) && (valor !== '.')
  }

  return (
    <button
    className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trim()}  
    // funcion anonima () => 
    onClick={() => manejarClic(children)} >
      {/* Children es lo que esta entre las etiquetas de cierre en el componente padre */}
      {children} 
    </button>
  )

  // Otra forma de retornar distintas clases
  /* 
    if (esOperador(children)) {
    return (
      <div
      className='boton-contenedor operador' 
      onClick={() => manejarClic(children)} >
        {children} 
      </div>
    )
  } else {
    return (
      <div
      className='boton-contenedor' 
      onClick={() => manejarClic(children)} >
        {children} 
      </div>
    )
  }
  */
}

export default Boton