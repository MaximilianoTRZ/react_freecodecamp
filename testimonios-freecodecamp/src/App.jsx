import './App.css';
import Testimonio from './components/Testimonio';

function App() {

  const cargo = 'Software Engineer'
  const empresa = 'Code Ink'

  return (
    <div className="App">
      <h1 className='codeink'>Code Ink</h1> 
      <div className="contenedor-principal">
        <h1>This is what our employees say about us:</h1>
        <Testimonio
          nombre='Maximiliano Rivero Zuin'
          pais='Coquimbito'
          imagen='maximiliano'
          cargo = {cargo}
          empresa = {empresa}
          testimonio='I absolutely loved working for Code Ink. The team was incredibly talented and supportive, and I learned so much from my colleagues. The company culture was amazing too, with regular team-building events and opportunities for professional development. I feel like I grew both personally and professionally during my time there.' /> 
        <Testimonio
          nombre='Franco Gregorio'
          pais='Gutierrez'
          imagen='franco'
          cargo = {cargo}
          empresa = {empresa}
          testimonio='I can honestly say that my time at Code Ink was one of the best experiences of my professional career. The company was truly invested in its employees, providing ongoing training and development opportunities, as well as a supportive and inclusive work environment. The team was like a family, and we all worked together towards a common goal. I was able to make a meaningful contribution to the company success while also growing as an individual.' />
        <Testimonio
          nombre='Lucas Udrea'
          pais='Las Heras'
          imagen='lucas'
          cargo = {cargo}
          empresa = {empresa}
          testimonio='I absolutely loved working for Code Ink. The team was incredibly talented and supportive, and I learned so much from my colleagues. The company culture was amazing too, with regular team-building events and opportunities for professional development. I feel like I grew both personally and professionally during my time there.' /> 
      </div>
    </div>
  );
}

export default App;
