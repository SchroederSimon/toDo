const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Importar rutas
const authRoute = require('./routes/auth');

dotenv.config();

//Conectar a mongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true}, () => 
    console.log('conectado a la db'));


//Middleware
app.use(express.json());

//Route middlewares esto va a ser: /api/user/register
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Sv anda'))