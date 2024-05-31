const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: ['GET', 'POST', 'OPTIONS'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
    optionsSuccessStatus: 200 // Response status code for OPTIONS requests
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api',userRoutes);
app.use('/api',petRoutes);
app.use('/api',eventRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error)
})