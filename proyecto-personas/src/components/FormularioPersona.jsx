import React, { useState } from 'react';

export default function FormularioPersona({ onRegistrar }) {
  const [formulario, setFormulario] = useState({
    numeroActa: '',
    anioRegistro: '',
    dni: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    lugarNacimiento: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    console.log('Datos del acta:', formulario);

    if (onRegistrar) {
      onRegistrar(formulario);
    }

    alert('Acta registrada correctamente');

    setFormulario({
      numeroActa: '',
      anioRegistro: '',
      dni: '',
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      lugarNacimiento: ''
    });
  };

  return (
    <form className="oa-registro-form" onSubmit={manejarEnvio}>
      <div className="oa-form-grid">

        <div className="oa-form-field">
          <label htmlFor="numeroActa">Número de acta</label>
          <input
            id="numeroActa"
            name="numeroActa"
            type="text"
            value={formulario.numeroActa}
            onChange={manejarCambio}
            placeholder="Ej. 000125"
            required
          />
        </div>

        <div className="oa-form-field">
          <label htmlFor="anioRegistro">Año de registro</label>
          <input
            id="anioRegistro"
            name="anioRegistro"
            type="number"
            value={formulario.anioRegistro}
            onChange={manejarCambio}
            placeholder="Ej. 2026"
            min="1900"
            max="2100"
            required
          />
        </div>

        <div className="oa-form-field">
          <label htmlFor="dni">DNI</label>
          <input
            id="dni"
            name="dni"
            type="text"
            value={formulario.dni}
            onChange={manejarCambio}
            placeholder="8 dígitos"
            maxLength="8"
            required
          />
        </div>

        <div className="oa-form-field">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input
            id="fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            value={formulario.fechaNacimiento}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="oa-form-field oa-form-field-wide">
          <label htmlFor="nombres">Nombres</label>
          <input
            id="nombres"
            name="nombres"
            type="text"
            value={formulario.nombres}
            onChange={manejarCambio}
            placeholder="Nombres del titular del acta"
            required
          />
        </div>

        <div className="oa-form-field oa-form-field-wide">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            value={formulario.apellidos}
            onChange={manejarCambio}
            placeholder="Apellidos del titular del acta"
            required
          />
        </div>

        <div className="oa-form-field oa-form-field-wide">
          <label htmlFor="lugarNacimiento">Lugar de nacimiento</label>
          <input
            id="lugarNacimiento"
            name="lugarNacimiento"
            type="text"
            value={formulario.lugarNacimiento}
            onChange={manejarCambio}
            placeholder="Ej. Trujillo, La Libertad"
            required
          />
        </div>

      </div>

      <div className="oa-form-actions">
        <span>DATOS DEL ACTA</span>

        <button type="submit">
          Registrar acta
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

