import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 
  const handleButtonClick = () => {
    setDisplayText(inputText); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Приложение</h1>
      
      {/* Поле ввода */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Введите текст"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      {/* Кнопка */}
      <button
        onClick={handleButtonClick}
        style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
      >
        Показать текст
      </button>
      
      {/* Метка для отображения текста */}
      <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        {displayText}
      </div>
    </div>
  );
}

export default App;
