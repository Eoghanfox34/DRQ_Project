import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error.message);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h2>Formula 1 Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;