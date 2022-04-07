// const express = require('express');
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'})


const app = express();

// Conectar a la base de datos
db.authenticate()
     .then( () => console.log('Database connected'))
     .catch(error => console.error(error));


// Definir HOST
const host = process.env.HOST || '0.0.0.0';
// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el anio actual
app.use((req,res, next) => {
     const year = new Date();
     res.locals.actualYear = year.getFullYear();
     res.locals.nombreSitio = 'Agencia de Viajes';
     return next();
})

// Agregar body Parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Se le pasan las rutas de router.
app.use('/', router);


app.listen(port, host, () => {
     console.log(`Server listening at port ${port}`);
})