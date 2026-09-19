import React, { useState, useEffect } from 'react';

export default function ModalEditar({ persona, onGuardar, onCerrar }) {
  const [formulario, setFormulario] = useState({
    numeroActa: '',
    anioRegistro: '',
    dni: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    lugarNacimiento: ''
  });

  // Cuando se recibe una persona, cargamos sus datos en el formulario
  useEffect(() => {
    if (persona) {
      setFormulario({
        numeroActa: persona.numeroActa || '',
        anioRegistro: persona.anioRegistro || '',
        dni: persona.dni || '',
        nombres: persona.nombres || '',
        apellidos: persona.apellidos || '',
        fechaNacimiento: persona.fechaNacimiento || '',
        lugarNacimiento: persona.lugarNacimiento || ''
      });
    }
  }, [persona]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarGuardar = (e) => {
    e.preventDefault();

    console.log('Datos actualizados:', formulario);

    if (onGuardar) {
      onGuardar(formulario);
    }

    alert('Acta actualizada correctamente');
  };

  // Si no hay una persona seleccionada, no mostramos el modal
  if (!persona) {
    return null;
  }

  return (
    <div
      className="oa-modal-overlay"
      onClick={() => onCerrar?.()}
    >
      <div
        className="oa-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="oa-modal-header">
          <div>
            <span className="oa-modal-kicker">
              MODIFICAR REGISTRO
            </span>

            <h2>
              Editar acta<span>.</span>
            </h2>
          </div>

          <button
            type="button"
            className="oa-modal-close"
            onClick={() => onCerrar?.()}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <form onSubmit={manejarGuardar}>
          <div className="oa-modal-form-grid">

            <div className="oa-modal-field">
              <label htmlFor="modalNumeroActa">
                Número de acta
              </label>

              <input
                id="modalNumeroActa"
                name="numeroActa"
                type="text"
                value={formulario.numeroActa}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="oa-modal-field">
              <label htmlFor="modalAnioRegistro">
                Año de registro
              </label>

              <input
                id="modalAnioRegistro"
                name="anioRegistro"
                type="number"
                value={formulario.anioRegistro}
                onChange={manejarCambio}
                min="1900"
                max="2100"
                required
              />
            </div>

            <div className="oa-modal-field">
              <label htmlFor="modalDni">
                DNI
              </label>

              <input
                id="modalDni"
                name="dni"
                type="text"
                value={formulario.dni}
                onChange={manejarCambio}
                maxLength="8"
                required
              />
            </div>

            <div className="oa-modal-field">
              <label htmlFor="modalFechaNacimiento">
                Fecha de nacimiento
              </label>

              <input
                id="modalFechaNacimiento"
                name="fechaNacimiento"
                type="date"
                value={formulario.fechaNacimiento}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="oa-modal-field oa-modal-field-wide">
              <label htmlFor="modalNombres">
                Nombres
              </label>

              <input
                id="modalNombres"
                name="nombres"
                type="text"
                value={formulario.nombres}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="oa-modal-field oa-modal-field-wide">
              <label htmlFor="modalApellidos">
                Apellidos
              </label>

              <input
                id="modalApellidos"
                name="apellidos"
                type="text"
                value={formulario.apellidos}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="oa-modal-field oa-modal-field-wide">
              <label htmlFor="modalLugarNacimiento">
                Lugar de nacimiento
              </label>

              <input
                id="modalLugarNacimiento"
                name="lugarNacimiento"
                type="text"
                value={formulario.lugarNacimiento}
                onChange={manejarCambio}
                required
              />
            </div>

          </div>

          <div className="oa-modal-actions">
            <button
              type="button"
              className="oa-modal-cancel"
              onClick={() => onCerrar?.()}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="oa-modal-save"
            >
              Guardar cambios
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

