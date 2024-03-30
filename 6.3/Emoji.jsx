import React, { useState } from 'react';

function Emoji = () => {
  const [mood, setMood] = useState('😊');

  const handleChangeMood = () => {
    // Toggle between two emojis
    setMood(prevMood => (prevMood === '😊' ? '😢' : '😊'));
  };

  return (
    <div>
      <h1>Emoji Mood</h1>
      <p>{mood}</p>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;