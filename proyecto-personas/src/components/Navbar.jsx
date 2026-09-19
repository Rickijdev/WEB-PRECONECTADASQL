import React from 'react';

// PERSONA 1: navegación de la página. Todos los enlaces llevan a secciones.
export default function Navbar() {
  return (
    <header className="oa-header">
      <div className="oa-container oa-header-inner">
        <a className="oa-brand" href="#inicio" aria-label="ArchivoLab, inicio">
          <span className="oa-brand-mark" aria-hidden="true">a<span>.</span></span>
          <span>ArchivoLab<span className="oa-brand-period">.</span><small>ORGANIZACIÓN DE ARCHIVOS</small></span>
        </a>
        <nav className="oa-navigation" aria-label="Navegación principal">
          <a href="#registros"><span>01</span> Laboratorio</a>
          <a href="#equipo"><span>02</span> Equipo</a>
          <a href="#proyecto"><span>03</span> Proyecto</a>
        </nav>
        <span className="oa-university-mark">UNT<span>TRUJILLO / PERÚ</span></span>
      </div>
    </header>
  );
}
