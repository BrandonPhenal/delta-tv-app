import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setNews(data.news));
  }, []);

  const newsString = news.map(item => `${item.title}`).join(' | ');

  return (
    <div className="news-ticker">
      <div className="news-ticker-content">
        {newsString}
      </div>
    </div>
  );
};

export default NewsTicker;
