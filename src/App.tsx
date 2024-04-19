// App.tsx
import { useState } from 'react'; // Solo necesitas importar useState aquí

import Hangman from './components/Hangman';
import Welcome from './components/Welcome';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grap', 'kiwi'];

function App() {
  const [showGame, setShowGame] = useState(false);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleBackClick = () => {
    setShowGame(false);
  };

  return (
    <div>
      {showGame ? (
        <Hangman words={words} onBackClick={handleBackClick} /> // Pasar la función onBackClick
      ) : (
        <Welcome onPlayClick={handlePlayClick} />
      )}
    </div>
  );
}

export default App;