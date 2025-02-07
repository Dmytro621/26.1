import './App.css';
import { useState } from 'react';

function App() {
  const [emoji, SetEmoji] = useState({
    emoji: {
      happy: '😀',
      sad: '🙁',
      cry: '😂',
    },
    points: {
      happyPoints: 0,
      sadPoints: 0,
      cryPoints: 0,
    }
  })

  const [winner, setWinner] = useState(null);

  function addPoints(item) {
    SetEmoji((prevState) => ({
      ...prevState,
      points: {
        ...prevState.points,
        [item]: prevState.points[item] + 1
      }
    }))
  }

  function showResult() {
     const maxPoints = Math.max(...Object.values(emoji.points));
    
     const winnerKey = Object.keys(emoji.points).find(key => emoji.points[key] === maxPoints);

    const emojiWinner = emoji.emoji[winnerKey.replace('Points', '')];

    setWinner(emojiWinner);
  }

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      <div className='emoji-box'>
        <div className='emoji-item'>
          <p>{emoji.emoji.happy}</p>
          <p>{emoji.points.happyPoints}</p>
          <button onClick={() => {addPoints('happyPoints')}}>Додати бал</button>
        </div>
        <div className='emoji-item'>
          <p>{emoji.emoji.sad}</p>
          <p>{emoji.points.sadPoints}</p>
          <button onClick={() => {addPoints('sadPoints')}}>Додати бал</button>
        </div>
        <div className='emoji-item'>
          <p>{emoji.emoji.cry}</p>
          <p>{emoji.points.cryPoints}</p>
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
