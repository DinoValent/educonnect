"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Book, Users, Briefcase } from "lucide-react";
import logo from "../public/image.png";

export default function HomePage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Image
            src={logo}
            alt="EduConnect Logo"
            className="logo-small" // Nueva clase para controlar el tamaño
            width={60} // Tamaño reducido
            height={60}
            priority
          />{" "}
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
            <a href="#testimonios" className="nav-link">
              Testimonios
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
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
          <section id="cursos" className="feature-card">
            <Book className="feature-icon" />
            <h3 className="feature-title">Cursos en Línea</h3>
            <p className="feature-text">
              Amplia variedad de cursos para adquirir habilidades prácticas en
              áreas clave del mercado laboral.
            </p>
          </section>

          <section id="mentoria" className="feature-card">
            <Users className="feature-icon" />
            <h3 className="feature-title">Sistema de Mentoría Virtual</h3>
            <p className="feature-text">
              Recibe orientación y apoyo de mentores experimentados en tu campo
              de estudio.
            </p>
          </section>

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
    </div>
  );
}
