/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { start } from "@popperjs/core";

window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
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
    "K"
  ];

  let randompalos = Math.floor(Math.random() * palos.length);
  let randomnumeros = Math.floor(Math.random() * numeros.length);
  let color =
    palos[randompalos] == "♦" || palos[randompalos] == "♥" ? "red" : "black";

  document.querySelector(".superior").innerHTML = palos[randompalos];
  document.querySelector(".superior").style.color = color;
  document.querySelector(".inferior").innerHTML = palos[randompalos];
  document.querySelector(".inferior").style.color = color;
  document.querySelector(".medio").innerHTML = numeros[randomnumeros];
  document.querySelector(".medio").style.color = color;
};
