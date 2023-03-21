import '../stylesheets/BotonClear.css'

const BotonClear = ({ children, manejarClic }) => (
  <div 
  className="boton-clear"
  onClick={() => manejarClic()} >
      {children}
  </div>
)

export default BotonClear