import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState(''); // Состояние для хранения текста из поля ввода
  const [displayText, setDisplayText] = useState(''); // Состояние для отображаемого текста

  // Функция, которая обновляет displayText при нажатии на кнопку
  const handleButtonClick = () => {
    setDisplayText(inputText); // Обновляем метку текстом из поля ввода
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Приложение</h1>
      
      {/* Поле ввода */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Обновляем inputText при изменении
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
