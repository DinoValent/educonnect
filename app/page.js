"use client";

import React from "react";
import { ChevronRight, Book, Users, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <img
            src="./crea_un_logo_para_mi_emprendimiento_el.jpeg" // Ruta al archivo del logo en la carpeta public
            alt="EduConnect Logo"
            className="logo"
          />
          <nav className="nav">
            <a href="#cursos" className="nav-link">
              Cursos
            </a>
            <a href="#mentoria" className="nav-link">
              Mentoría
            </a>
            <a href="#empleo" className="nav-link">
              Empleo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Capacitando a jóvenes en áreas de alta demanda
          </h2>
          <p className="hero-text">
            Aprende programación, diseño, marketing digital y atención al
            cliente con el mejor sistema de mentoría virtual.
          </p>
          <div className="button-group">
            <button className="button button-primary">
              Explorar Cursos
              <ChevronRight className="button-icon" />
            </button>
            <button className="button button-secondary">
              Ver Oportunidades de Empleo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="features">
        <div className="features-grid">
          {/* Cursos Section */}
          <section id="cursos" className="feature-card">
            <Book className="feature-icon" />
            <h3 className="feature-title">Cursos en Línea</h3>
            <p className="feature-text">
              Amplia variedad de cursos para adquirir habilidades prácticas en
              áreas clave del mercado laboral.
            </p>
          </section>

          {/* Mentoría Section */}
          <section id="mentoria" className="feature-card">
            <Users className="feature-icon" />
            <h3 className="feature-title">Sistema de Mentoría Virtual</h3>
            <p className="feature-text">
              Recibe orientación y apoyo de mentores experimentados en tu campo
              de estudio.
            </p>
          </section>

          {/* Empleo Section */}
          <section id="empleo" className="feature-card">
            <Briefcase className="feature-icon" />
            <h3 className="feature-title">Sección de Empleo</h3>
            <p className="feature-text">
              Empresas de renombre pueden buscar y contratar directamente a
              nuestros graduados.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; 2024 EduConnect. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
