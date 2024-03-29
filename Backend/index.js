const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors');
const API_CONFIG_PUERTO = 8080;


//enabling CORS for all requests
app.use(cors())

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node!!")
})

app.use('/', require('./Routes/Routes'));

//Inicio del servidor --> localhost:3014
app.listen(API_CONFIG_PUERTO, () => {
    console.log(`Server started at http://localhost:${API_CONFIG_PUERTO}`)
})

module.exports.API_CONFIG_PUERTO = API_CONFIG_PUERTO;