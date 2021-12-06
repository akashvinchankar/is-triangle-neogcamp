const sides = document.querySelectorAll(".triangle-sides");
const checkArea = document.querySelector("#check-area");
const output = document.querySelector("#output");


function areaFormula(b, h){
    const area = 0.5 * (b * h);
    return area;
}

function triangleArea(){
    const areaT = areaFormula(Number(sides[0].value), Number(sides[1].value));
    output.innerText = "Area of Triangle is " + areaT + " cm²";
}

checkArea.addEventListener("click", triangleArea);