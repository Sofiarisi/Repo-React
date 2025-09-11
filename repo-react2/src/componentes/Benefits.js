// src/componentes/Benefits.js
import React from 'react';

// Componente para cada "tarjeta" de beneficio
function BenefitCard({ icon, title, description }) {
  return (
    <div className="benefit-card">
      <span className="benefit-icon">{icon}</span>
      <h4 className="benefit-title">{title}</h4>
      <p className="benefit-description">{description}</p>
    </div>
  );
}

// Componente principal de la sección "Beneficios"
function Benefits() {
  return (
    <section className="benefits-section">
      <h2 className="section-title">Beneficios de la plataforma</h2>
      <p className="section-description">
        {/* Usé un placeholder de texto ya que no estaba en tu imagen, puedes cambiarlo */}
      </p>
      <div className="benefits-grid">
        <BenefitCard
          icon="🌐"
          title="Accesibilidad"
          description="Interfaz sencilla y fácil de usar para médicos y enfermeros"
        />
        <BenefitCard
          icon="🔄"
          title="Reciprocabilidad"
          description="Escuchamos tu feedback y adaptamos el proyecto a vos! Desarrollo 100% propio, control total sobre el código."
        />
        <BenefitCard
          icon="📱"
          title="Flexibilidad de interfaz"
          description="Funciona en múltiples dispositivos"
        />
        <BenefitCard
          icon="📋"
          title="Funcioabilidad"
          description="Potencial para reducir muertes con una detección temprana."
        />
        <BenefitCard
          icon="💾"
          title="Archivos"
          description="Historial de resultados, pacientes y signos vitales, funcionando como una base de datos automatica."
        />
        <BenefitCard
          icon="📊"
          title="Resultados"
          description="Predicción rápida y precisa para actuar antes de que la sepsis avance. El modelo utilizado tiene una exactitud de más del 80 por ciento"
        />
      </div>
    </section>
  );
}

export default Benefits;