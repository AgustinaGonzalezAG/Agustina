/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //evento al boton
  let boton = document.getElementById("nuevaCarta");

  //genera numeros aleatorios y los guarda en una variable
  function generarValoresAleatorios() {
    let palos = [" ♦ ", "♥", "♠", "♣"];
    let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)]; //me da del 1 al 4?
    let valorAlatorio = valor[Math.floor(Math.random() * valor.length)];

    let numero = document.getElementById("nuevoNumero");
    let palo = document.getElementsByClassName("palo");
    numero.innerHTML = valorAlatorio;
    palo[0].innerHTML = paloAleatorio;
    palo[1].innerHTML = paloAleatorio;
  }

  boton.addEventListener("click", generarValoresAleatorios);
  //ahora generar una nueva carta
};
