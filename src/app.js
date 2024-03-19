/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  refrescarCarta();
  setInterval(refrescarCarta, 3000);
};

function refrescarCarta() {
  let carta = document.querySelector(".carta");
  carta.className = "carta";
  carta.classList.add(generarIconoAleatorio());
  carta.innerHTML = generarNumeroAleatorio();
}

function generarNumeroAleatorio() {
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let indexNumeros = Math.floor(Math.random() * numeros.length);

  return numeros[indexNumeros];
}

function generarIconoAleatorio() {
  let iconos = ["spade", "heart", "club", "diamond"];

  let indexIconos = Math.floor(Math.random() * iconos.length);

  return iconos[indexIconos];
}

document
  .getElementById("refrescarBotonCarta")
  .addEventListener("click", refrescarCarta);

function tamañoCarta() {
  let width = document.getElementById("anchoCarta").value;
  let height = document.getElementById("alturaCarta").value;

  let carta = document.querySelector(".carta");
  carta.style.width = width + "px";
  carta.style.height = height + "px";
}

document
  .getElementById("refrescarBotonTamañoCarta")
  .addEventListener("click", tamañoCarta);
