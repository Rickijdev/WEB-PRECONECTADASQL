// PERSONA 1: navegación dentro de esta misma página, sin React Router.
export default function Navbar() {
  return (
    <header className="p1-header">
      <div className="p1-container p1-navbar">
        <a className="p1-brand" href="#inicio" aria-label="Personas: ir al inicio">
          <span className="p1-brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" />
            </svg>
          </span>
          <span>personas<span className="p1-brand-dot">.</span></span>
        </a>

        <nav className="p1-nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#directorio">Directorio</a>
          <a className="p1-nav-register" href="#registro">Registrar persona</a>
        </nav>
      </div>
    </header>
  );
}
