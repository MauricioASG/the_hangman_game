// App.tsx
import { useState } from 'react';
import Hangman from './components/Hangman'; // Importa el componente Hangman
import Welcome from './components/Welcome'; // Importa el componente Welcome

// Definición del objeto de categorías y palabras asociadas
const categories = {
  fruits: ['apple', 'banana', 'cherry', 'date', 'fig', 'grap', 'kiwi'],
  animals: ['cat', 'dog', 'elephant', 'giraffe', 'lion', 'tiger', 'zebra'],
  countries: ['argentina', 'brazil', 'canada', 'denmark', 'egypt', 'france', 'germany'],
  sports: ['football', 'basketball', 'tennis', 'swimming', 'baseball', 'volleyball', 'rugby', 'golf'],
  planets: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
};

// Componente funcional App
function App() {
  const [showGame, setShowGame] = useState(false); // Estado para mostrar el juego o la pantalla de bienvenida
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada

  // Función para manejar el clic en "Play"
  const handlePlayClick = () => {
    setShowGame(true); // Mostrar el juego
    const categoriesKeys = Object.keys(categories); // Obtener las claves del objeto de categorías
    const randomCategory = categoriesKeys[Math.floor(Math.random() * categoriesKeys.length)]; // Seleccionar una categoría aleatoria
    setSelectedCategory(randomCategory); // Establecer la categoría seleccionada
  };

  // Función para manejar el clic en "Back"
  const handleBackClick = () => {
    setShowGame(false); // Ocultar el juego
    setSelectedCategory(''); // Reiniciar la categoría seleccionada
  };

  return (
    <div>
      {/* Renderizar el componente Hangman si showGame es true, de lo contrario, renderizar Welcome */}
      {showGame ? (
        <Hangman words={categories[selectedCategory]} category={selectedCategory} onBackClick={handleBackClick} />
      ) : (
        <Welcome onPlayClick={handlePlayClick} />
      )}
    </div>
  );
}

export default App;