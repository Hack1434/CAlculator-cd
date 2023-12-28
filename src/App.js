import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);


const handleAddTwo = () => {
  setNumber(prevNumber => prevNumber + 2);
};

const handleSquare = () => {
  setNumber(prevNumber => prevNumber ** 2);
};

const handleDouble = () => {
  setNumber(prevNumber => prevNumber * 2);
}

const handleDivideByTwo = () => {
  setNumber(prevNumber => prevNumber / 2);
}

const handleSubtractTwo = () => {
  setNumber(prevNumber => prevNumber - 2);
}

return (

  <div className="calculator">
  <h1>2s Calculator</h1>
  <div className ="display">
  <h2>{number}</h2>
  </div>

  <div className="button">
  <button onClick={handleAddTwo}>Add 2</button>
  <button onClick={handleSquare}>Square</button>
        <button onClick={handleDouble}>Double</button>
        <button onClick={handleDivideByTwo}>Divide by 2</button>
        <button onClick={handleSubtractTwo}>Subtract 2</button>

  </div>

  </div>
)

};

export default App;