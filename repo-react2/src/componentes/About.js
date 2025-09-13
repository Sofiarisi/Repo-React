// src/componentes/About.js
import React from 'react';

// Componente para la tarjeta de cada miembro del equipo
function TeamMember({ name, role, image }) {
  return (
    <div className="team-member-card">
      <img src={image} alt={`Foto`} className="member-photo" />
      <h4 className="member-name">{name}</h4>
      <p className="member-role">{role}</p>
    </div>
  );
}

// Componente principal de la sección "Sobre nosotros"
function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">Sobre nosotros</h2>
      <p className="section-description">
        Somos un grupo de estudiantes de la Ciudad de Buenos Aires, especializados en el área de tecnología, que a partir de la problematica decidimos iniciar el proyecto, no solo con objetivos didactivos, sino como mision personal.
      </p>
      <h3 className="team-heading">Miembros del equipo</h3>
      <div className="team-members-container">
        <TeamMember
          name="Sofía Arisi"
          role="Desarrolladora de la Inteligencia Artificial y su empleacion."
          image="/path/to/sofia-arisi.jpg" // Reemplaza con la ruta de la imagen
        />
        <TeamMember
          name="Sofía Mosayebéh"
          role="Desarrolladora de la Inteligencia Artificial y su empleacion."
          image="/path/to/sofia-mosayebéh.jpg" // Reemplaza con la ruta de la imagen
        />
        <TeamMember
          name="Dana Ravinovich"
          role="Diseñadora de la interfaz y de la experiencia del usuario."
          image="/path/to/dana-ravinovich.jpg" // Reemplaza con la ruta de la imagen
        />
        <TeamMember
          name="Jazmín Falbwiesebéz"
          role="Encargada de desarrollar y gestionar el Front end, integrando diseño y usabilidad."
          image="/path/to/jazmin-falbwiesebéz.jpg" // Reemplaza con la ruta de la imagen
        />
        <TeamMember
          name="Julieta Kogan"
          role="Encargada de ejecutar la base de datos y asegurar la ciberseguridad."
          image="/path/to/julieta-kogan.jpg" // Reemplaza con la ruta de la imagen
        />
      </div>
    </section>
  );
}

export default About;