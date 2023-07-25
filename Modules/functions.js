let x = 0;
const rotate = (domElement) => {
  x = x + 30;
  domElement.style.transform = "rotate(" + x + "deg)";
};

const changeColour = (domElement) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
};

export { rotate, changeColour };
