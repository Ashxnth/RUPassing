const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});

//connect to database
connectDB();
const calculations = require('./routes/calculations');

//initialize express app
const app = express();

//body-parser middleware
app.use(express.json());

//routes
app.use('/api/v1/calculations', calculations);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
