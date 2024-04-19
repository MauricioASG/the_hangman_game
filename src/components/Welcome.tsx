// Welcome.tsx
import hangman from "../img/hangman.png";
import '../css/Welcome.css';

export default function Welcome() {
  const handlePlayClick = () => {
    alert("¡Presionaste Play!");
  };

  return (
    <div className="wrapper">
      <h1>Welcome</h1>
      <img src={hangman} alt="Hangman image" width={200} height={200} />
      <h2>Classical Game</h2>
      <h3>By Mauricio Alejandro</h3>
      <button className="play-button" onClick={handlePlayClick}>Play</button>
    </div>
  );
}
