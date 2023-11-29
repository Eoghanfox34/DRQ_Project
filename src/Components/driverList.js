import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DriverList = () => {
  const [teams, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('/drivers');
        setDrivers(response.data);
      } catch (error) {
        console.error('Error fetching drivers:', error.message);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <div>
      <h2>Formula 1 Drivers</h2>
      <ul>
        {teams.map((driver) => (
          <li key={driver.id}>{driver.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;