// App.tsx
import React, { useState } from 'react';
import Hangman from './components/Hangman';
import Welcome from './components/Welcome';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grap', 'kiwi'];

function App() {
  const [showGame, setShowGame] = useState(false);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  return (
    <div>
      {showGame ? (
        <Hangman words={words} />
      ) : (
        <Welcome onPlayClick={handlePlayClick} />
      )}
    </div>
  );
}

export default App;
