const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  let a = Number(inputs[0].value);
  let b = Number(inputs[1].value);
  let c = Number(inputs[2].value);

  if (a > 0 && b > 0 && c > 0) {
    const sumOfAngles = calculateSumOfAngles(a, b, c);

    if (sumOfAngles === 180) {
      outputEl.innerText = "Yay, the angles form a triangle";
    } else {
      outputEl.innerText = "Oh Oh! the angles don't form a triangle";
    }
  } else {
    outputEl.innerText = "Please enter positive value of angle"
  }
}

isTriangleButton.addEventListener("click", isTriangle);
