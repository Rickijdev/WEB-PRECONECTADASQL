import { useState } from 'react';
import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import TablaPersonas from './components/TablaPersonas.jsx';
import './styles/main.css';

const integrantes = [
  { apellidos: 'Burgos Mendoza', nombres: 'Cristian Albert' },
  { apellidos: 'Benites Alejandria', nombres: 'Cesar Leandro' },
  { apellidos: 'Carranza Vargas', nombres: 'Kevin Alexis' },
  { apellidos: 'Castillo Cisneros', nombres: 'Kiara Marley' },
  { apellidos: 'Julca Davila', nombres: 'Ricky Gilbert' },
  { apellidos: 'Silvestre Ferrer', nombres: 'Jeffran Alberto' },
];

export default function App() {
  const [personas, setPersonas] = useState(integrantes);

  const handleBuscar = (termino) => {
    const texto = termino.trim().toLowerCase();

    if (!texto) {
      setPersonas(integrantes);
      return;
    }

    const resultados = integrantes.filter((persona) =>
      `${persona.nombres} ${persona.apellidos}`
        .toLowerCase()
        .includes(texto)
    );

    setPersonas(resultados);
  };

  return (
    <Home
      buscador={<Buscador onBuscar={handleBuscar} />}
      tablaPersonas={<TablaPersonas personas={personas} />}
    />
  );
}
