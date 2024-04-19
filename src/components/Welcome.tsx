// Welcome.tsx
import hangman from "../img/hangman.png";
import '../css/Welcome.css';

interface WelcomeProps {
  onPlayClick: () => void;
}

export default function Welcome({ onPlayClick }: WelcomeProps) {
  return (
    <div className="wrapper">
      <h1>Welcome</h1>
      <img src={hangman} alt="Hangman image" width={200} height={200} />
      <h2>Classical Game</h2>
      <h3>By Mauricio Alejandro</h3>
      <button className="play-button" onClick={onPlayClick}>Play</button>
    </div>
  );
}