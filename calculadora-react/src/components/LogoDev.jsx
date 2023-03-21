import '../App.css';
import maximilianotrzLogo from '../img/maximilianotrz-logo.png';

const LogoDev = () => {
  return(
    <div className="logo-contenedor">
      <img 
      src={maximilianotrzLogo} 
      className='logo'
      alt="Logo de MaximilianotrzDev" />
    </div>
  )
}

export default LogoDev