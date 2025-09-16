// src/componentes/Testimonials.js
import React from 'react';

// Componente para la tarjeta de cada testimonio
function TestimonialCard({ text, author, role, image }) {
  return (
    <div className="testimonial-card">
      <div className="stars">⭐⭐⭐⭐⭐</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="author-info">
        {/* <img src={image} alt={`Foto de ${author}`} className="author-photo" /> */}
        <div className="author-details">
          <h4 className="author-name">{author}</h4>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Componente principal de la sección "Testimonios"
function Testimonials() {
  const commonText = "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.";
  const commonAuthor = "Jenny Wilson";
  const commonRole = "Graphic Designer";

  return (
    <section className="testimonials-section">
      <p className="recommendations">2,157 personas recomiendan SepsIA</p>
      <h2 className="section-title">Experiencias de usuarios anteriores</h2>
      <div className="testimonials-container">
        <TestimonialCard
          text={commonText}
          author={commonAuthor}
          role={commonRole}
          // image="/path/to/jenny-wilson.jpg"
        />
        <TestimonialCard
          text={commonText}
          author={commonAuthor}
          role={commonRole}
          // image="/path/to/jenny-wilson.jpg"
        />
        <TestimonialCard
          text={commonText}
          author={commonAuthor}
          role={commonRole}
          // image="/path/to/jenny-wilson.jpg"
        />
      </div>
      <a href="#" className="all-reviews-link">Ver todas las reseñas</a>
    </section>
  );
}

export default Testimonials;