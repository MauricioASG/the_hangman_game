import hangman from "../img/hangman.png";
import  '../css/Welcome.css';
export default function Welcome(){
  return(
    <>
      <div className="wrapper">
        <h1>Welcome</h1>
        <img src={hangman} alt="Handman image" width={200} height={200}/>
        <h2>Classical Game</h2>
      </div>
    </>
  );
}