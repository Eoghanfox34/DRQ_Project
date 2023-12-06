import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamList from './Components/teamsList';
import DriverList from './Components/driverList'; 
import TrackList from './Components/trackList';

const App = () => {
  const [editEntity, setEditEntity] = useState({ type: '', id: null });

  const handleEdit = (entityType, entityId) => {
    setEditEntity({ type: entityType, id: entityId });
  };

  const handleCloseEdit = () => {
    setEditEntity({ type: '', id: null });
  };

  return (
    <Router>
      <Switch>
        <Route path="/teamsList" exact>
          <TeamList onEdit={handleEdit} />
        </Route>
        <Route path="/driverList" exact>
          <DriverList onEdit={handleEdit} />
        </Route>
        <Route path="/trackList" exact>
          <TrackList onEdit={handleEdit} />
        </Route>
        
      </Switch>
      {editEntity.type && (
        <EditForm
          entityType={editEntity.type}
          entityId={editEntity.id}
          onClose={handleCloseEdit}
          onUpdate={(updatedData) => {
            // Handle the updated data, e.g., refresh the entity list
            console.log(`Updated ${editEntity.type}:`, updatedData);
          }}
        />
      )}
    </Router>
  );
};


export default App;