const sides = document.querySelectorAll(".triangle-sides");
const checkArea = document.querySelector("#check-area");
const output = document.querySelector("#output");

function areaFormula(b, h) {
  const area = 0.5 * (b * h);
  return area;
}

function triangleArea() {
  let a = Number(sides[0].value);
  let b = Number(sides[1].value);

  if (a > 0 && b > 0) {
    const areaT = areaFormula(a, b);
    output.innerText = "Area of Triangle is " + areaT + " cm²";
  } else {
    output.innerText = "Enter positive value of sides";
  }
}

checkArea.addEventListener("click", triangleArea);
