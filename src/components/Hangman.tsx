// Hangman.tsx

import { useState } from "react";
import "../css/Hangman.css"; // Importa los estilos CSS para el componente Hangman
import hangmanpart1 from "../img/hangmanPart1.png"; // Importa las imágenes del juego del ahorcado
import hangmanpart2 from "../img/hangmanPart2.png";
import hangmanpart3 from "../img/hangmanPart3.png";
import hangmanpart4 from "../img/hangmanPart4.png";
import hangmanpart5 from "../img/hangmanPart5.png";
import hangmanpart6 from "../img/hangmanPart6.png";
import hangmanpart7 from "../img/hangmanPart7.png";

// Definición de la interfaz de las propiedades de Hangman
interface HangmanProps {
  words: string[]; // Array de palabras para adivinar
  category: string; // Categoría del juego
  onBackClick: () => void; // Función de devolución de llamada para manejar el clic en "Back"
}

// Componente funcional Hangman que recibe las propiedades definidas en HangmanProps
const Hangman = ({ words, category, onBackClick }: HangmanProps) => {
  const [selectedWord, setSelectedWord] = useState(words[0]); // Estado para la palabra seleccionada
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); // Estado para las letras adivinadas
  const [errorCount, setErrorCount] = useState(0); // Estado para el contador de errores

  // Función para mostrar la palabra a adivinar con las letras adivinadas y guiones para las no adivinadas
  const displayWord = selectedWord.split("").map((letter) => {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });

  // Función para manejar el intento de adivinar una letra
  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  // Función para reiniciar el juego
  const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setErrorCount(0);
  };

  // Función para obtener la imagen correspondiente según el número de errores
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
        return hangmanpart1; // Mostrar la imagen inicial del ahorcado
    }
  };

  return (
    <div className="container">
      <p>Category: {category}</p> {/* Muestra la categoría del juego */}
      <img src={getHangmanImage()} alt="Hangman" /> {/* Muestra la imagen del ahorcado según los errores */}
      <p>{displayWord.join(" ")}</p> {/* Muestra la palabra a adivinar con letras adivinadas y guiones */}
      <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} /> {/* Campo de entrada para adivinar letras */}
      {/* Botón para seleccionar una nueva palabra o reiniciar el juego */}
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
      <p>Error count: {errorCount}</p> {/* Muestra el contador de errores */}
      {displayWord.join("") === selectedWord && <p>You win this round</p>} {/* Mensaje de victoria */}
      
      <button className="back-button" onClick={onBackClick}>Back</button> {/* Botón "Back" */}
    </div>
  );
};

export default Hangman;
