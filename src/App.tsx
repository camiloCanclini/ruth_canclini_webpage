// src/App.tsx
import React from 'react';
import 'bootstrap'; // Importa estilos y JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS precompilado de Bootstrap
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Layouts/Index.js'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Index/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
