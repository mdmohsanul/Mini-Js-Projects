const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.trunc(Math.random() * 16)];
  }
  return color;
};

// document.getElementById("start").addEventListener("click", () => {
//   const interval = setInterval(() => {
//     document.body.style.backgroundColor = randomColor();
//   }, 1000);

//   document.getElementById("stop").addEventListener("click", () => {
//     clearInterval(interval);
//   });
// });
let interval;
const startChangingColor = () => {
  if (!interval) interval = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(interval);
  interval = null; // for better coding practice, production level coding
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
