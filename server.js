const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is running'));

//Cors issue
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //any Domain
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept, Authorization, X-Auth-Token'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/translation', require('./routes/api/translation'));

const Port = 7100;

app.listen(Port, () => console.log(`Server is running on Port ${Port}`));
