import React, { useState, useEffect } from 'react';

const EPG = () => {
  const [shows, setShows] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const [selectedDay, setSelectedDay] = useState(today);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setShows(data.shows));
  }, []);

  const getShowsForDay = (day) => {
    return shows
      .filter(show => show.schedule.some(s => s.day === day))
      .sort((a, b) => {
        const timeA = a.schedule.find(s => s.day === day).time;
        const timeB = b.schedule.find(s => s.day === day).time;
        return timeA.localeCompare(timeB);
      });
  };

  return (
    <div className="card">
      <h2>Program Schedule</h2>
      <div className="day-selector">
        {daysOfWeek.map(day => (
          <button
            key={day}
            className={`btn ${selectedDay === day ? 'btn-primary' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="epg-grid">
        <div className="epg-channel">Delta TV</div>
        <div>
        {getShowsForDay(selectedDay).map(show => (
          <div key={show.id} className="epg-program">
            <strong>{show.schedule.find(s => s.day === selectedDay).time}</strong> - {show.title}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default EPG;
