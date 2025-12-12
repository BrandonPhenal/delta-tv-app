import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { shows, liveStream } from '../shows';
import './Dashboard.css';

// --- Mock Data Processing ---
const totalVODViews = shows.reduce((acc, show) => acc + show.views, 0);
const liveData = { name: 'Live', value: liveStream.liveViewers };
const vodData = { name: 'Catch Up', value: totalVODViews };
const engagementData = [liveData, vodData];

const popularShowsData = shows
  .map(show => ({ name: show.title, views: show.views }))
  .sort((a, b) => b.views - a.views);

const COLORS = ['#00AEEF', '#8884d8'];

const StatCard = ({ title, value }) => (
  <div className="stat-card">
    <h4>{title}</h4>
    <p>{value.toLocaleString()}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <StatCard title="Total 'Catch Up' Views" value={totalVODViews} />
        <StatCard title="Current Live Viewers" value={liveStream.liveViewers} />
        <StatCard title="Total Shows" value={shows.length} />
      </div>
      <div className="charts-grid">
        <div className="chart-container">
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
        <div className="chart-container">
          <h3>Most Popular Shows</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularShowsData} layout="vertical" margin={{ left: 30 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={120} stroke="#e5e7eb" />
              <Tooltip cursor={{ fill: '#1f2937' }} />
              <Bar dataKey="views" fill="#00AEEF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
