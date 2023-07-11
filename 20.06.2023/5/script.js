let question = document.querySelector(`.question`);
let correct = document.querySelector(`.correct`);
let wrong = document.querySelector(`.wrong`);
let button = document.querySelector(`button`);
// let colordiv = document.querySelector(`.colordiv`);
// let rgbname = document.querySelector(`.rgbname`);
//let newcolor = document.querySelector(`.newcolor`);
//colordiv.style.backgroundColor = `rgb(${123},${122},${444})`

button.addEventListener(`click`, () => {
    newColorAdd()
    question.value = ``;
    correct.value = ``;
    wrong.value = ``;
})

function newColorAdd() {
    let QUESTION = question.value;
    let CORRECT = correct.value;
    let WRONG = wrong.value;
    let newQuestion = document.createElement(`div`)
    let writeQuestion = document.createElement(`p`)
    let writeCorrect = document.createElement(`p`);
    let writeWrong = document.createElement(`p`);
    newQuestion.classList.add(`newQuestion`)
    writeQuestion.classList.add(`writeQuestion`)
    document.querySelector(`.row1`).appendChild(newQuestion)
    newQuestion.appendChild(writeQuestion);
    newQuestion.appendChild(writeQuestion);
    newQuestion.appendChild(writeCorrect);
    newQuestion.appendChild(writeWrong);
    writeQuestion.textContent = `${QUESTION}`
    writeCorrect.textContent = `Correct answer: ${CORRECT}`
    writeWrong.textContent = `Цкщтп answer: ${WRONG}`
}



