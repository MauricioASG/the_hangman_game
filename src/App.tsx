// App.tsx
import { useState } from 'react';
import Hangman from './components/Hangman';
import Welcome from './components/Welcome';

const categories = {
  fruits: ['apple', 'banana', 'cherry', 'date', 'fig', 'grap', 'kiwi'],
  animals: ['cat', 'dog', 'elephant', 'giraffe', 'lion', 'tiger', 'zebra'],
  countries: ['argentina', 'brazil', 'canada', 'denmark', 'egypt', 'france', 'germany'],
  sports: ['football', 'basketball', 'tennis', 'swimming', 'baseball', 'volleyball', 'rugby', 'golf'],
  planets: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
};

function App() {
  const [showGame, setShowGame] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePlayClick = () => {
    setShowGame(true);
    const categoriesKeys = Object.keys(categories);
    const randomCategory = categoriesKeys[Math.floor(Math.random() * categoriesKeys.length)];
    setSelectedCategory(randomCategory);
  };

  const handleBackClick = () => {
    setShowGame(false);
    setSelectedCategory('');
  };

  return (
    <div>
      {showGame ? (
        <Hangman words={categories[selectedCategory]} category={selectedCategory} onBackClick={handleBackClick} />
      ) : (
        <Welcome onPlayClick={handlePlayClick} />
      )}
    </div>
  );
}

export default App;


