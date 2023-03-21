import '../stylesheets/BotonCalculate.css'

const BotonCalculate = ({ children, manejarClic }) => (
  <button 
  className="boton-calculate"
  onClick={() => manejarClic()} >
      {children}
  </button>
)

export default BotonCalculate