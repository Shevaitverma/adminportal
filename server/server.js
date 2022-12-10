const express = require('express');
const dotenv = require('dotenv');
const app = express();
// const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");



// configure router...
const router = require('./routes/admin');

// middlewares...
app.use(express.json());
app.use(bodyParser.json());
// app.use(cors());

// routes midleware...
app.use('/admin', router);

// config mongoDB...
mongoose.connect('mongodb+srv://rexxy:962239@auth1.aeccu.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to db...');
}).catch((err) => console.log('err'));

// config dotenv...
dotenv.config({path: './config.env'});

// listening tothe server...
const PORT = process.env.PORT|5000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}!`);
});