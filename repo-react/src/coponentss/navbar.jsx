// src/App.js
import React from 'react';
import './App.css'; // Importamos los estilos para este componente

// Este es tu componente principal, una función que devuelve JSX.
function App() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-left">
          <span className="icon">🏠</span>
        </div>
        <div className="header-right">
          <a href="/login" className="nav-link">Inicio de sesion</a>
          <a href="/register" className="nav-link">Registro</a>
          <span className="icon">👤</span>
        </div>
      </header>

      <main className="hero-section">
        <h1 className="logo">
          Seps<span className="logo-accent">IA</span>
        </h1>
        <p className="subtitle">El sowftare de deteccion de Sepsis mas confiado por medicos</p>
        <p className="author">by TIC Belgrano</p>
      </main>
    </div>
  );
}

export default App; // Exportamos el componente para que pueda ser usado en otros archivos.