import Navbar from '../components/Navbar.jsx';

// PERSONA 1: distribución de la página.
// Estas props reciben JSX, por ejemplo: buscador={<Buscador />}.
// Sin una prop, mostramos un espacio reservado en su lugar.
// Así no importamos archivos todavía vacíos o pendientes de otras ramas.
export default function Home({ buscador, tablaPersonas, formularioPersona, modalEditar }) {
  return (
    <div className="p1-shell" id="inicio">
      <a className="p1-skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />

      <main id="contenido" className="p1-container p1-main" tabIndex={-1}>
        <section className="p1-hero" aria-labelledby="titulo-principal">
          <div className="p1-hero-copy">
            <p className="p1-eyebrow">DIRECTORIO DE PERSONAS</p>
            <h1 id="titulo-principal">Tus registros,<br /><span>en un solo lugar.</span></h1>
            <p className="p1-intro">
              Un espacio para consultar nombres y apellidos y mantener
              organizada la información de las personas.
            </p>
            <a className="p1-primary-link" href="#directorio">
              Ir al directorio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="p1-hero-note">
            <span className="p1-note-line" aria-hidden="true" />
            <p>Información clara.<br />Gestión sencilla.</p>
            <span>Consulta · Registro · Actualización</span>
          </div>
        </section>

        <div className="p1-workspace">
          <section id="directorio" className="p1-panel" aria-labelledby="titulo-directorio">
            <div className="p1-panel-heading">
              <div>
                <p className="p1-eyebrow">01 / CONSULTA</p>
                <h2 id="titulo-directorio">Directorio</h2>
              </div>
              <span className="p1-section-mark" aria-hidden="true">↗</span>
            </div>
            <p className="p1-section-description">Encuentra la información de una persona.</p>

            {/* PERSONA 2: aquí se muestra <Buscador />. */}
            <div className="p1-search-slot">
              {buscador ?? <EspacioReservado titulo="Buscador" />}
            </div>

            {/* PERSONA 2: aquí se muestra <TablaPersonas personas={personas} />.
                TODO BACKEND: proporcionar los resultados del GET desde App.
                No cargar toda la base en el navegador; acordar paginación. */}
            <div className="p1-table-slot">
              {tablaPersonas ?? <EspacioReservado titulo="Tabla de personas" amplio />}
            </div>
          </section>

          <section id="registro" className="p1-panel p1-register-panel" aria-labelledby="titulo-registro">
            <div className="p1-panel-heading">
              <div>
                <p className="p1-eyebrow">02 / REGISTRO</p>
                <h2 id="titulo-registro">Nueva persona</h2>
              </div>
              <span className="p1-section-mark" aria-hidden="true">+</span>
            </div>
            <p className="p1-section-description">Agrega nombres y apellidos al directorio.</p>

            {/* PERSONA 3: aquí se muestra <FormularioPersona />.
                TODO BACKEND: conectar el envío con POST; actualizar la vista
                y mostrar éxito solo después de confirmar la respuesta. */}
            {formularioPersona ?? <EspacioReservado titulo="Formulario de registro" amplio />}
          </section>
        </div>
      </main>

      {/* PERSONA 3: insertar aquí su ModalEditar cuando esté integrado.
          TODO BACKEND: conectar editar/eliminar con PUT/PATCH y DELETE.
          Sus props y la apertura/cierre se acordarán al unir el componente. */}
      {modalEditar}

      <footer className="p1-footer">
        <div className="p1-container p1-footer-content">
          <span>Personas · Proyecto académico</span>
          <a href="#inicio">Volver al inicio <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}

// Solo es una tarjeta de maqueta; no sustituye los componentes del equipo.
function EspacioReservado({ titulo, amplio = false }) {
  return (
    <div className={`p1-placeholder${amplio ? ' p1-placeholder-large' : ''}`}>
      <span className="p1-placeholder-symbol" aria-hidden="true">+</span>
      <strong>{titulo}</strong>
      <span>Espacio reservado</span>
    </div>
  );
}
