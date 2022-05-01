// me traigo la libreria express y la incorporo en mi variable app
const express = require("express");
const app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado) {
  resultado.send("Este es el <strong>home</strong> genial!!");
}

function cursos(peticion, resultado) {
  resultado.send("Estos son los <strong>cursos</strong>");
}

app.listen(8989);

// platzi.com/js
