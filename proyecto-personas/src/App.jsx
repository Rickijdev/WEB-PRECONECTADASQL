import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import './styles/main.css';

// PERSONA 1: punto de entrada y unión de los componentes.
// La estructura se puede revisar sin esperar a las personas 2 y 3.
// En LEEME.md está el ejemplo para conectar sus componentes terminados.
export default function App() {
return <Home buscador={<Buscador />} />;
}
