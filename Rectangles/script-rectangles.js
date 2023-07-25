import { rotate, changeColour } from "../Modules/functions.js";
const rect1 = document.getElementById("rect-1");
const rect2 = document.getElementById("rect-2");
const rect3 = document.getElementById("rect-3");
const rect4 = document.getElementById("rect-4");
rect1.addEventListener("click", () => {
  rotate(rect1);
  changeColour(rect1);
});
rect2.addEventListener("click", () => {
  rotate(rect2);
  changeColour(rect2);
});
rect3.addEventListener("click", () => {
  rotate(rect3);
  changeColour(rect3);
});
rect4.addEventListener("click", () => {
  rotate(rect4);
  changeColour(rect4);
});
