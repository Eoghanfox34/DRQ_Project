const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teamRoutes = require('./routes/teamList');
const driverRoutes = require('./routes/driverList');
const trackRoutes = require('./routes/trackList');


const app = express();
const PORT = 4000;

// Connect to MongoDB (Update the connection string accordingly)
mongoose.connect('mongodb://localhost:27017/formula1db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API configuration
const API_BASE_URL = 'https://ergast.com/api';


app.use(bodyParser.json());
app.use('/teams', teamRoutes);
app.use('/drivers', driverRoutes);
app.use('/tracks', trackRoutes);


app.get('/teams', async (req, res) => {
  try{
    const response = await axios.get('${API_BASE_URL}/f1/2023/constructors.json', req.body);
    const teams = response.data.MRData.ConstructorTable.Constructors;
    res.json(teams);
  } catch (err) {
    res.json({message: err.message});
  }
});

app.patch('/teams/update/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const updatedTeam = await axios.patch('${API_BASE_URL}/f1/2023/constructors${id}.json', req.body);
    res.json(updatedTeam.data.MRData.ConstructorTable.Constructors[0]);
  } catch (err) {
    res.json({message: err.message});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});