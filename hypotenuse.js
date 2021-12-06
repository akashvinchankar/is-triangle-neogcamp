const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumofSquares = a*a + b*b;
    return sumofSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    output.innerText = "The Hypotenuse is " + Math.sqrt(sumOfSquares) + " cm";
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
