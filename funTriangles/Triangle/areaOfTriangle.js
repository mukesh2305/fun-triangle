const inputText = document.querySelectorAll(".input-text");
const calculate = document.querySelector("#calculate-area");
const btnOutput = document.querySelector("#output");

function calculateSumOfSides(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;
    let areaOfTriangle;
    if (side1 + side2 > side3) {
        areaOfTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
        return areaOfTriangle;
    }
    else if (side1 + side2 < side3) {
        areaOfTriangle = "is not possible Because, always side1 + side2 > side3"
        return areaOfTriangle;
    }
    else {
        areaOfTriangle = "not possible, bacause filed are empty";
        return areaOfTriangle;

    }
}
function calculateAreaOfTriangle(e) {
    e.preventDefault();
    const areaOfTriangle = calculateSumOfSides(Number(inputText[0].value), Number(inputText[1].value), Number(inputText[2].value));
    btnOutput.innerText = "Area of Triangle is " + areaOfTriangle;
}
calculate.addEventListener("submit", calculateAreaOfTriangle);
