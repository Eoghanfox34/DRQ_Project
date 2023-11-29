import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrackList = () => {
  const [teams, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('/tracks');
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching tracks:', error.message);
      }
    };

    fetchTrack();
  }, []);

  return (
    <div>
      <h2>Formula 1 Tracks</h2>
      <ul>
        {teams.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;