import React from 'react';
import Last from './Last'; // Make sure the path is correct
import './UpcomingEvent.css';

const UpcomingEvent = () => {
  return (
    <div className="upcoming-event-container">
      <h1 className="event-title">Upcoming Events</h1>
      <Last />
    </div>
  );
};

export default UpcomingEvent;
