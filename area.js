const sides = document.querySelectorAll(".triangle-sides");
const checkArea = document.querySelector("#check-area");
const output = document.querySelector("#output");


function areaFormula(b, h){
    const area = 1/2 * (b * h);
    return area;
}

function triangleArea(){
    const areaT = areaFormula(Number(sides[0].value), Number(sides[0].value));
    output.innerText = "Area of Triangle is " + areaT;
}

checkArea.addEventListener("click", triangleArea);