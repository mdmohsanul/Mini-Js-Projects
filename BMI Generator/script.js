const form = document.querySelector("form");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heightValue = parseInt(height.value);

  const weightValue = parseInt(weight.value);
  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    document.querySelector("#heightError").innerHTML =
      "Please give a valid Height";
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    document.querySelector("#weightError").innerHTML =
      "Please give a valid Weight";
  } else {
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    document.querySelector("#result").innerHTML = bmi;
  }
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
  e.preventDefault();

  height.value = "";
  weight.value = "";
});
