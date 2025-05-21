import React, { useState } from 'react';
import './TeamMembers.css';

const OurTeam = [
  {
    name: "Amit Srivastav",
    role: "प्रशासनिक अधिकारी",
    location: "Kushinagar (Uttar Pradesh)",
    image: "/Src/assets/Team/1000060656_1282024213056.png",
  },
  {
    name: "Rishikesh Nishad",
    role: "जिला मीडिया प्रभारी कुशीनगर",
    location: "Kushinagar (Uttar Pradesh)",
    image: "/Src/assets/Team/1000060656_1282024213056.png",
  },
  {
    name: "Anil Sahni",
    role: "ब्लॉक महामंत्री कप्तानगंज",
    location: "Kushinagar (Uttar Pradesh)",
   image: "/Src/assets/Team/1000060656_1282024213056.png",
  },
  {
    name: "Narender Sharma",
    role: "Member",
    location: "Maharajganj (Uttar Pradesh)",
    image: "/Src/assets/Team/1000060656_1282024213056.png",
  },
  {
    name: "Naveen Srivastav",
    role: "ब्लॉक अध्यक्ष खड्डा कुशीनगर",
    location: "Kushinagar (Uttar Pradesh)",
    image: "/Src/assets/Team/1000060656_1282024213056.png",
  }
];

const TeamMembers = () => {
  const [query, setQuery] = useState("");

  const filteredMembers = OurTeam.filter(member =>
    member.name.toLowerCase().includes(query.toLowerCase()) ||
    member.role.toLowerCase().includes(query.toLowerCase()) ||
    member.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="team-section">
      <h2 className="section-title">Team Members</h2>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Search by name, role or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search team members"
        />
      </div>
      <div className="team-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <article key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="team-image"
              />
              <div className="card-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="location">{member.location}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="no-results">No team members found.</p>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;
