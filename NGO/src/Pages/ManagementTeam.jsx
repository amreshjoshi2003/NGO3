import React, { useState } from 'react';
import './ManagementTeam.css';

const teamData = [
  {
    name: 'Deepak Ji',
    title: 'प्रदेश अध्यक्ष जम्मू-कश्मीर',
    region: '(Jammu and Kashmir)',
    image: 'https://jvahini.in/user_img/WhatsApp%20Image%202024-09-06%20at%2016.34.05_3ff3f242_0962024173803.jpg',
  },
  {
    name: 'Rishikesh Nishad',
    title: 'जिला मीडिया प्रभारी कुशीनगर',
    region: '(Uttar Pradesh)',
    image: 'https://jvahini.in/webimg/Rishikesh_03312025110511.jpeg',
  },
  {
    name: 'Naveen Srivastav',
    title: 'ब्लॉक अध्यक्ष खड्डा कुशीनगर',
    region: '(Uttar Pradesh)',
    image: 'https://jvahini.in/user_img/Navin_03312025110612.jpg',
  },
  {
    name: 'Shailesh Srivastav',
    title: 'ब्लॉक संरक्षक खड्डा कुशीनगर',
    region: '(Uttar Pradesh)',
    image: 'https://jvahini.in/webimg/IMG-20250405-WA0013_0452025120640.jpg',
  },
];

const ManagementTeam = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeam = teamData.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="team-container">
      <h2 className="team-heading">Management Team</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-wrapper">
        {filteredTeam.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <p className="region">{member.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;
