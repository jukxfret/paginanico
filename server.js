// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para recibir denuncias
app.post('/denuncias', (req, res) => {
    const { descripcion } = req.body;
    console.log('Denuncia recibida:', descripcion);
    // Aquí podrías almacenar la denuncia en una base de datos
    res.status(200).send({ message: 'Denuncia recibida con éxito.' });
});

// Endpoint para recibir mensajes de contacto
app.post('/contacto', (req, res) => {
    const { nombre, mensaje } = req.body;
    console.log('Mensaje de contacto:', { nombre, mensaje });
    // Aquí podrías almacenar o enviar el mensaje
    res.status(200).send({ message: 'Mensaje enviado con éxito.' });
});

// Servir archivos estáticos
app.use(express.static('public'));

app.listen(PORT, () => {
    console.logServidor corriendo en http://localhost:${186.98.2.235});
});