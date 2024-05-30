const form = document.querySelector("form");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const heightError = document.querySelector("#heightError");
const weightError = document.querySelector("#weightError");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heightValue = parseInt(height.value);
  const weightValue = parseInt(weight.value);

  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    heightError.innerHTML = "Please give a valid Height";
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    weightError.innerHTML = "Please give a valid Weight";
  } else {
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    if (bmi < 18.6) {
      result.innerHTML = `${bmi} : You're Under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `${bmi} : Congrats You're Fit`;
    } else if (bmi > 24.9) {
      result.innerHTML = `${bmi} : You're Overweight`;
    }
    heightError.innerHTML = "";
    weightError.innerHTML = "";
  }
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", (e) => {
  e.preventDefault();

  height.value = "";
  weight.value = "";
  heightError.innerHTML = "";
  weightError.innerHTML = "";
  result.innerHTML = "";
});
