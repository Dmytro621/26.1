import './App.css';
import { useState } from 'react';

function App() {
  const [emoji, SetEmoji] = useState({
    happy: '😀',
    sad: '🙁',
    cry: '😂',
    happyPoints: 0,
    sadPoints: 0,
    cryPoints: 0,
  })

  const [winner, setWinner] = useState(null);

  function addPoints(item) {
    SetEmoji((prevState) => ({
      ...prevState,
      [item]: prevState[item] + 1
    }))
  }

  function showResult() {
    const points = {
      happyPoints: emoji.happyPoints,
      sadPoints: emoji.sadPoints,
      cryPoints: emoji.cryPoints
    }

     const maxPoints = Math.max(...Object.values(points));
    
     const winnerKey = Object.keys(points).find(key => points[key] === maxPoints);

    const emojiWinner = emoji[winnerKey.replace('Points', '')];

    setWinner(emojiWinner);
  }

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      <div className='emoji-box'>
        <div className='emoji-item'>
          <p>{emoji.happy}</p>
          <p>{emoji.happyPoints}</p>
          <button onClick={() => {addPoints('happyPoints')}}>Додати бал</button>
        </div>
        <div className='emoji-item'>
          <p>{emoji.sad}</p>
          <p>{emoji.sadPoints}</p>
          <button onClick={() => {addPoints('sadPoints')}}>Додати бал</button>
        </div>
        <div className='emoji-item'>
          <p>{emoji.cry}</p>
          <p>{emoji.cryPoints}</p>
          <button onClick={() => {addPoints('cryPoints')}}>Додати бал</button>
        </div>
      </div>
      <button className='button-result' onClick={showResult}>Показати результати</button>
      {winner && (
        <div>
          <h2>Переможець:</h2>
          <p>{winner}</p>
        </div>
      )}
    </div>
  );
}

export default App;
