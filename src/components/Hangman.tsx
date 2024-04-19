// Hangman.tsx
import { useState } from "react";
import "../css/Hangman.css";

interface HangmanProps {
  words: string[];
  category: string;
  onBackClick: () => void;
}

const Hangman = ({ words, category, onBackClick }: HangmanProps) => {
  const [selectedWord, setSelectedWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  const displayWord = selectedWord.split("").map((letter) => {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setErrorCount(0);
  };

  return (
    <div className="container">
      <p>Category: {category}</p>
      <p>{displayWord.join(" ")}</p>
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
      {(displayWord.join("") === selectedWord || errorCount > 5) && (
        <button
          onClick={() => {
            restartGame();
            setSelectedWord(words[Math.floor(Math.random() * words.length)]);
          }}
        >
          Select New Word
        </button>
      )}
      <p>Error count: {errorCount}</p>
      {displayWord.join("") === selectedWord && <p>You win this round</p>}
      
      <button className="back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};

export default Hangman;
