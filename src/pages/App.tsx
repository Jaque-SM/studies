import React from 'react';
import '../App.css';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import "./style.scss";

function App() {

  return (
    <div className="AppStyle">
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
