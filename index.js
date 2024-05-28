const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api',userRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error)
})