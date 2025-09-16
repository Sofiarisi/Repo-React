// src/componentes/About.js
import React from 'react';
import img1 from '../imagenes/IMG.png';
import img2 from '../imagenes/IMG1.png';
import img3 from '../imagenes/IMG2.png';
import img4 from '../imagenes/IMG3.png';
import img5 from '../imagenes/IMG4.png';

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
          image={img1}
        />
        <TeamMember
          name="Sofía Mosayebéh"
          role="Desarrolladora de la Inteligencia Artificial y su empleacion."
          image={img2}
        />
        <TeamMember
          name="Dana Ravinovich"
          role="Diseñadora de la interfaz y de la experiencia del usuario."
          image={img3}
        />
        <TeamMember
          name="Jazmín Falbwiesebéz"
          role="Encargada de desarrollar y gestionar el Front end, integrando diseño y usabilidad."
          image={img4}
        />
        <TeamMember
          name="Julieta Kogan"
          role="Encargada de ejecutar la base de datos y asegurar la ciberseguridad."
          image={img5}
        />
      </div>
    </section>
  );
}

export default About;