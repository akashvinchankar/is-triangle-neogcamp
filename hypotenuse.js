const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumofSquares = a * a + b * b;
  return sumofSquares;
}

function calculateHypotenuse() {
  let a = Number(sides[0].value);
  let b = Number(sides[1].value);

  if (a > 0 && b > 0) {
    const sumOfSquares = calculateSumOfSquares(a, b);
    output.innerText = "The Hypotenuse is " + Math.sqrt(sumOfSquares) + " cm";
  } else {
    output.innerText = "Enter positive value of sides";
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
