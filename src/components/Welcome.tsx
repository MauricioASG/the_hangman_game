// Welcome.tsx

// Importación de la imagen del juego del ahorcado y los estilos CSS
import hangman from "../img/hangman.png"; // Importa la imagen del juego del ahorcado
import '../css/Welcome.css'; // Importa los estilos CSS para el componente Welcome

// Definición de la interfaz de las propiedades de Welcome
interface WelcomeProps {
  onPlayClick: () => void; // Función de devolución de llamada para manejar el clic en "Play"
}

// Componente funcional Welcome que recibe las propiedades definidas en WelcomeProps
export default function Welcome({ onPlayClick }: WelcomeProps) {
  return (
    <div className="wrapper"> {/* Contenedor principal con clase "wrapper" */}
      <h1>Welcome</h1> {/* Título principal */}
      <img src={hangman} alt="Hangman image" width={200} height={200} /> {/* Imagen del juego del ahorcado */}
      <h2>Classical Game</h2> {/* Subtítulo */}
      <h3>By Mauricio Alejandro</h3> {/* Nombre del desarrollador */}
      <button className="play-button" onClick={onPlayClick}>Play</button> {/* Botón "Play" */}
    </div>
  );
}
