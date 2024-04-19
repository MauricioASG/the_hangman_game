// Hangman.tsx
import React, { useState } from "react";
import "../css/Hangman.css";

interface HangmanProps {
  words: string[];
}

const Hangman = ({ words }: HangmanProps) => {
  // Almacena la palabra que va a tener que adivinar el juego
  const [selectedWord, setSelectedWord] = useState(words[0]);
  // Array vacío donde nosotros tendremos que estar poniendo las letras que vayamos adivinando
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  const displayWord = selectedWord.split("").map((letter) => {
    console.log("selectedWord: ", selectedWord);
    if (guessedLetters.includes(letter)) {
      console.log("guessedLetters: ", guessedLetters);
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
        console.log("setErrorCount: ", setErrorCount);
      }
    }
  };

  const restarGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]); //Reiniciar las letras adivinadas
    setErrorCount(0);
  };

  return (
    <div className="container">
      <p>{displayWord.join(" ")}</p>
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
      {(displayWord.join("") === selectedWord || errorCount > 5) && (
        <button
          onClick={() => {
            restarGame();
            setSelectedWord(words[Math.floor(Math.random() * words.length)]);
          }}
        >
          {" "}
          Select New Word
        </button>
      )}
      <p>Cantidad de errores {errorCount}</p>
      {displayWord.join("") === selectedWord && <p>You win this round</p>}
    </div>
  );
};

export default Hangman;
