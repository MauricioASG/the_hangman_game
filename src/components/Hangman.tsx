// Hangman.tsx
import { useState, useEffect } from "react";
import "../css/Hangman.css";
import hangmanpart1 from "../img/hangmanPart1.png";
import hangmanpart2 from "../img/hangmanPart2.png";
import hangmanpart3 from "../img/hangmanPart3.png";
import hangmanpart4 from "../img/hangmanPart4.png";
import hangmanpart5 from "../img/hangmanPart5.png";
import hangmanpart6 from "../img/hangmanPart6.png";
import hangmanpart7 from "../img/hangmanPart7.png";

interface HangmanProps {
  words: string[];
  category: string;
  onBackClick: () => void;
  className?: string; // Agregar prop para la clase personalizada
}

const Hangman = ({ words, category, onBackClick, className }: HangmanProps) => {
  const [selectedWord, setSelectedWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const displayWord = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"));

  const getHangmanImage = () => {
    switch (errorCount) {
      case 1:
        return hangmanpart2;
      case 2:
        return hangmanpart3;
      case 3:
        return hangmanpart4;
      case 4:
        return hangmanpart5;
      case 5:
        return hangmanpart6;
      case 6:
        return hangmanpart7;
      default:
        return hangmanpart1;
    }
  };

  const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setErrorCount(0);
    setElapsedTime(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  const isWin = displayWord.join("") === selectedWord;

  return (
    <div className={`container ${className}`}>
      <p>Category: {category}</p>
      <img src={getHangmanImage()} alt="Hangman" />
      <p>{displayWord.join(" ")}</p>
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
      {(isWin || errorCount > 5) && (
        <button onClick={restartGame}>Select New Word</button>
      )}
      <p>Error count: {errorCount}</p>
      {isWin && <p>You win this round</p>}
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button className="back-button" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};

export default Hangman;
