import React from 'react';
import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import './styles/main.css';

// PERSONA 1: diseño general e integración.
export default function App() {
return <Home buscador={<Buscador />} />;
}
