import { useState } from 'react';
import './App.css';

function App() {

  const[randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const changeRandomNumber = () => {
    setRandomNumber((Math.floor(Math.random() * 100) + 1));
  }

  return(
    <>
    <h3>Випадкове число: {randomNumber}</h3>
    <button onClick={changeRandomNumber}>Показати</button>
    </>
  );
}

export default App;