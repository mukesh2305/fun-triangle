const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90deg", "right angled"];
// calculate score 
function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults);
    for (let value of formResults.values()) {
        // console.log(value);
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;

    }
    // console.log(score);
    outputEl.innerText = "Your Score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
