import { useState } from 'react';

export default function Buscador({ onBuscar }) {
  const [termino, setTermino] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar?.(termino);
  };

  return (
    <form className="p2-search" onSubmit={handleSubmit}>
      <label htmlFor="buscar-persona">Buscar persona</label>

      <div className="p2-search-row">
        <input
          id="buscar-persona"
          type="search"
          value={termino}
          onChange={(e) => {
            const nuevoTermino = e.target.value;
            setTermino(nuevoTermino);

            if (nuevoTermino === '') {
              onBuscar?.('');
            }
          }}
          placeholder="Escribe nombre, DNI o número de acta"
        />

        <button type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}