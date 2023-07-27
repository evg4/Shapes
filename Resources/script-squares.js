import { rotate, changeColour } from "./Modules/dom-functions.js";
const sq1 = document.getElementById("sq-1");
const sq2 = document.getElementById("sq-2");
const sq3 = document.getElementById("sq-3");
const sq4 = document.getElementById("sq-4");

sq1.addEventListener("click", () => {
  rotate(sq1);
  changeColour(sq1);
});
sq2.addEventListener("click", () => {
  rotate(sq2);
  changeColour(sq2);
});
sq3.addEventListener("click", () => {
  rotate(sq3);
  changeColour(sq3);
});
sq4.addEventListener("click", () => {
  rotate(sq4);
  changeColour(sq4);
});
