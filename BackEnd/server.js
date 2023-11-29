const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teamRoutes = require('./routes/teams');
const driverRoutes = require('./routes/drivers');
const trackRoutes = require('./routes/tracks');


const app = express();
const PORT = 4000;

// Connect to MongoDB (Update the connection string accordingly)
mongoose.connect('mongodb://localhost:27017/formula1db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/teams', teamRoutes);
app.use('/drivers', driverRoutes);
app.use('/tracks', trackRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});