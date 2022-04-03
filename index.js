// const express = require('express');
import express from 'express';
import router from './routes/index.js'

const app = express();

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

// Definir la carpeta publica
app.use(express.static('public'));

// Se le pasan las rutas de router.
app.use('/', router);

app.listen(port, () => {
     console.log(`Server listening at port ${port}`);
})