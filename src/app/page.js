'use client';
import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [text, setText] = useState('');
  const [writer, setWriter] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=json&lang=ru';
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error('Сеть не доступна');
      const result = await res.json();
      setText(result.quoteText);
      setWriter(result.quoteAuthor || 'Автора не указано');
    } catch (err) {
      console.error('Ошибка загрузки цитаты:', err);
    }
  };

  return (
    <div className="quote-generator">
      <blockquote className="quote">{text}</blockquote>
      <cite className="author">— {writer}</cite><br/>
      <button className="new-quote" onClick={getQuote}>Получить новую цитату</button>
    </div>
  );
};

export default QuoteGenerator;