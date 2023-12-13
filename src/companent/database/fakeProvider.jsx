import React, { useState, useEffect } from 'react';

function fakeProvider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Запрос к фейковому API с использованием fetch
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Ошибка при запросе данных:', error));
  }, []);

  return (
    <div>
      <h1>Данные из фейкового API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default fakeProvider;
