import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EPG from '../components/EPG';
import NewsTicker from '../components/NewsTicker';
import PeakHoursChart from '../components/PeakHoursChart';

const COLORS = ['#3b82f6', '#8b5cf6'];

const StatCard = ({ title, value }) => (
  <div className="card">
    <h4>{title}</h4>
    <p>{value.toLocaleString()}</p>
  </div>
);

const Dashboard = () => {
  const [shows, setShows] = useState([]);
  const [liveStream, setLiveStream] = useState({ liveViewers: 0 });

  useEffect(() => {
    fetch('http://localhost:3001/shows')
      .then(res => res.json())
      .then(data => setShows(data));
    
    const fetchLiveViewers = () => {
      fetch('http://localhost:3001/liveStream')
        .then(res => res.json())
        .then(data => setLiveStream(data));
    };

    fetchLiveViewers();
    const interval = setInterval(fetchLiveViewers, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const totalVODViews = shows.reduce((acc, show) => acc + show.views, 0);
  const totalViews = totalVODViews + liveStream.liveViewers;
  const engagementData = [
    { name: 'Live', value: liveStream.liveViewers },
    { name: 'Catch Up', value: totalVODViews }
  ];

  const popularShowsData = shows
    .map(show => ({ name: show.title, views: show.views }))
    .sort((a, b) => b.views - a.views);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <NewsTicker />
      <div className="stats-grid">
        <StatCard title="Total Views" value={totalViews} />
        <StatCard title="Current Live Viewers" value={liveStream.liveViewers} />
        <StatCard title="Total 'Catch Up' Views" value={totalVODViews} />
      </div>
      <div className="charts-grid">
        <div className="card">
          <h3>Live vs. Catch Up Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={engagementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3>Most Popular Shows</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularShowsData} layout="vertical" margin={{ left: 30 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={120} stroke="#e5e7eb" />
              <Tooltip cursor={{ fill: '#1f2937' }} />
              <Bar dataKey="views" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <PeakHoursChart />
      </div>
      <EPG />
    </div>
  );
};

export default Dashboard;
