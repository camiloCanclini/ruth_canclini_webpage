// src/App.tsx
import React from 'react';
import 'bootstrap'; // Importa estilos y JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS precompilado de Bootstrap

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Hola, esta es mi aplicación React con Bootstrap!</h1>
      <button className="btn btn-primary">Botón de Bootstrap</button>
    </div>
  );
};

export default App;
