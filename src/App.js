import './App.css';
import logo from './imagenes';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo'
          src={logo}
          alt='logo de contador'/>
      </div>  
    </div>
  );
}

export default App;
