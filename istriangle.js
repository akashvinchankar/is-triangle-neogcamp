const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    console.log(sumOfAngles);
    if(sumOfAngles === 180){
        outputEl.innerText = "Yay, the angles form a triangle";
    }else{
        outputEl.innerText = "Oh Oh! the angles don't form a triangle";
    }
} 


isTriangleButton.addEventListener("click", isTriangle);