import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio(){
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require('../img/testimonio-maxi.png')}
        alt='Foto de Emma' />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> Maximiliano Rivero Zuin de Coquimbito</p>
        <p className="cargo-testimonio">Ingeniero de Software en Code Ink</p>
        <p className="texto-testimonio">I absolutely loved working for XYZ Software. The team was incredibly talented and supportive, and I learned so much from my colleagues. The company culture was amazing too, with regular team-building events and opportunities for professional development. I feel like I grew both personally and professionally during my time there.</p>
      </div>
    </div>
  )
}


export default Testimonio