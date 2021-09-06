const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquare = a * a + b * b;
    // console.log(sumOfSquare)
    return sumOfSquare;
}
function calculateHypotenuse() {
    // console.log("hypotenus");
    const sumOfsqures = calculateSumOfSquares(sides[0].value, sides[1].value)
    // console.log(sumOfsqures);
    const lengthOfHypotenuse = Math.sqrt(sumOfsqures);
    outputEl.innerText = "The length of hypotenus is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);