// App.tsx
import Hangman from './components/Hangman';
import Welcome from './components/Welcome';

const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grap', 'kiwi'];

function App() {
  return (
    <div>
      <Welcome />
      <Hangman words={words} />
    </div>
  );
}

export default App;
