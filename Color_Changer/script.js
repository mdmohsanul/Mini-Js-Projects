const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.body;
console.log(body);

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target.id);
    let bgColor = e.target.id;
    body.style.backgroundColor = bgColor;
  });
});
