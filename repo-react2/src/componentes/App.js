// // src/componentes/App.js
// import React from 'react';
// import './App.css'; // Importamos los estilos para este componente

// // Este es tu componente principal, una función que devuelve JSX.
// function App() {
//   return (
//     <div className="landing-container">
//       <header className="header">
//         <div className="header-left">
//           <span className="icon">🏠</span>
//         </div>
//         <div className="header-right">
//           <a href="/login" className="nav-link">Inicio de sesion</a>
//           <a href="/register" className="nav-link">Registro</a>
//           <span className="icon">👤</span>
//         </div>
//       </header>

//       <main className="hero-section">
//         <h1 className="logo">
//           Seps<span className="logo-accent">IA</span>
//         </h1>
//         <p className="subtitle">El sowftare de deteccion de Sepsis mas confiado por medicos</p>
//         <p className="author">by TIC Belgrano</p>
//       </main>
//     </div>
//   );
// }

// export default App; // Exportamos el componente para que pueda ser usado en otros archivos.
// src/componentes/App.js
import React from 'react';
import './App.css'; 
import vectorImg from '../imagenes/Vector.png'; 
import vectorImg2 from '../imagenes/Vector2.png'; 
// Importamos los nuevos componentes
import About from './About';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import ProjectInfo from './ProyectInfo';

// Este es tu componente principal, una función que devuelve JSX.
function App() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-left">
          <img src={vectorImg}   alt="Inicio" className="icon" style={{ width: 32, height: 32 }} />
        </div>
        <div className="header-right">
          <a href="/login" className="nav-link">Inicio de sesion</a>
          <a href="/register" className="nav-link">Registro</a>
          <img src={vectorImg2}   alt="Inicio" className="icon" style={{ width: 32, height: 32 }} />
        </div>
      </header>

      <main>
        
        <section className="hero-section">
          <h1 className="logo">
            Seps<span className="logo-accent">IA</span>
          </h1>
          <p className="subtitle">El sowftare de deteccion de Sepsis mas confiado por medicos</p>
          <p className="author">by TIC Belgrano</p>
        </section>

        {/* Agregamos las nuevas secciones aquí */}
        <About />
        <Benefits />
        <ProjectInfo />
        <Testimonials />
        
      </main>

      {/* Agregamos un Footer al final */}
      <footer className="footer">
        <p className="footer-text">Contactanos</p>
        <div className="footer-social-icons">
          <a href="#" className="social-icon">✉️</a>
          <a href="#" className="social-icon">📘</a>
          <a href="#" className="social-icon">📸</a>
        </div>
      </footer>
    </div>
  );
}

export default App;