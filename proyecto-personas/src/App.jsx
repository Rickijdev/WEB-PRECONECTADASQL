import { useState } from 'react';

import Home from './pages/Home.jsx';

import Buscador from './components/Buscador.jsx';
import TablaPersonas from './components/TablaPersonas.jsx';
import FormularioPersona from './components/FormularioPersona.jsx';
import ModalEditar from './components/ModalEditar.jsx';

import './styles/main.css';

const integrantes = [
  {
    apellidos: 'Burgos Mendoza',
    nombres: 'Cristian Albert',
    dni: '12345678',
    numeroActa: '000125',
    anioRegistro: '2026',
    fechaNacimiento: '2000-05-15',
    lugarNacimiento: 'Trujillo, La Libertad'
  },
  {
    apellidos: 'Benites Alejandria',
    nombres: 'Cesar Leandro',
    dni: '23456789',
    numeroActa: '000126',
    anioRegistro: '2026',
    fechaNacimiento: '2001-08-22',
    lugarNacimiento: 'Trujillo, La Libertad'
  },
  {
    apellidos: 'Carranza Vargas',
    nombres: 'Kevin Alexis',
    dni: '34567890',
    numeroActa: '000127',
    anioRegistro: '2025',
    fechaNacimiento: '1999-03-10',
    lugarNacimiento: 'Chiclayo, Lambayeque'
  },
  {
    apellidos: 'Castillo Cisneros',
    nombres: 'Kiara Marley',
    dni: '45678901',
    numeroActa: '000128',
    anioRegistro: '2025',
    fechaNacimiento: '2002-11-05',
    lugarNacimiento: 'Trujillo, La Libertad'
  },
  {
    apellidos: 'Julca Davila',
    nombres: 'Ricky Gilbert',
    dni: '56789012',
    numeroActa: '000129',
    anioRegistro: '2024',
    fechaNacimiento: '1998-07-18',
    lugarNacimiento: 'Lima, Lima'
  },
  {
    apellidos: 'Silvestre Ferrer',
    nombres: 'Jeffran Alberto',
    dni: '67890123',
    numeroActa: '000130',
    anioRegistro: '2024',
    fechaNacimiento: '2000-12-30',
    lugarNacimiento: 'Trujillo, La Libertad'
  }
];



export default function App() {
  const [personas, setPersonas] = useState(integrantes);
  const [personasMostradas, setPersonasMostradas] = useState(integrantes);
  const [personaEditar, setPersonaEditar] = useState(null);

  const handleRegistrar = (nuevaPersona) => {
    setPersonas((personasActuales) => [
      ...personasActuales,
      nuevaPersona
    ]);

    setPersonasMostradas((personasActuales) => [
      ...personasActuales,
      nuevaPersona
    ]);
  };

  const handleGuardarEdicion = (datosActualizados) => {
    setPersonas((personasActuales) =>
      personasActuales.map((persona) =>
        persona === personaEditar ? datosActualizados : persona
      )
    );

    setPersonasMostradas((personasActuales) =>
      personasActuales.map((persona) =>
        persona === personaEditar ? datosActualizados : persona
      )
    );

    setPersonaEditar(null);
  };

  const handleBuscar = (termino) => {
    const texto = termino.trim().toLowerCase();

    if (!texto) {
      setPersonasMostradas(personas);
      return;
    }

    const resultados = personas.filter((persona) =>
      `${persona.nombres} ${persona.apellidos} ${persona.dni} ${persona.numeroActa}`
        .toLowerCase()
        .includes(texto)
    );

    setPersonasMostradas(resultados);
  };

  return (
    <Home
      buscador={<Buscador onBuscar={handleBuscar} />}
      
      tablaPersonas={
        <TablaPersonas
          personas={personasMostradas}
          onEditar={setPersonaEditar}
        />
      }

      formularioPersona={
        <FormularioPersona onRegistrar={handleRegistrar} />
      }

      modalEditar={
          <ModalEditar
            persona={personaEditar}
            onGuardar={handleGuardarEdicion}
            onCerrar={() => setPersonaEditar(null)}
          />
      }

    />
  );
}

