// src/ProjectInfo.js
import React from 'react';

function ProjectInfo() {
  return (
    <section className="project-info-section">
      <div className="project-origin">
        <h2 className="section-title">Como surgio el proyecto</h2>
        <p className="section-description-centered">
          A partir de un proyecto escolar, decidimos afrontar una problematica que nos apasiona, no solo por su complejidad, sino que por la necesidad y urgencia que esta refleja en la comunidad medica.
        </p>
      </div>
      <div className="project-objectives">
        <h2 className="section-title">Objetivos del proyecto</h2>
        <p className="section-description-centered">
          Ofrecer nuevas soluciones, con el uso de la tecnologia medica, para facilitar, y mejorar la eficiencia de los procesos medicos que ayudan a detectar la Sepsis. Ofrecemos una herramineta moderna a los equipos de enfermeria.
        </p>
      </div>
    </section>
  );
}

export default ProjectInfo;