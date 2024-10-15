// require = import express

const express = require("express");

//cria uma aplicação Express chamada app, um objeto com métodos para
// - routing http requests
// - configurar middleware
// - renderizar html views
// - registrar uma engine template
// - modificar confiuraçãoes de aplicação 
const app = express();
const port = 3000;

// definição de rota

// app.get é um método que define uma função callback para lidar com
// requests GET, com o path ("/") (o root do site)
app.get("/", function (req, res) { // request e response são os argumentos
    res.send("Hello World!");
});


// inicia o servidor na porta 3000
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});