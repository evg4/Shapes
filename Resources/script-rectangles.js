import { rotate, changeColour } from "./Modules/dom-functions.js";

/*const rotate = (domElement) => {
    x = x + 30;
  domElement.style.transform = "rotate(" + x + "deg)";
};

const changeColour = (domElement) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};*/

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
