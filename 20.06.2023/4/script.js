let red = document.querySelector(`.r`);
let green = document.querySelector(`.g`);
let blue = document.querySelector(`.b`);
let button = document.querySelector(`button`);
let colordiv = document.querySelector(`.colordiv`);
let rgbname = document.querySelector(`.rgbname`);
//let newcolor = document.querySelector(`.newcolor`);
//colordiv.style.backgroundColor = `rgb(${123},${122},${444})`

button.addEventListener(`click`, () => {

    newColorAdd()
})

function newColorAdd() {
    let RED = red.value;
    let GREEN = green.value;
    let BLUE = blue.value;
    let newcolor = document.createElement(`div`)
    let colordiv = document.createElement(`div`)
    let rgbname = document.createElement(`div`);
    newcolor.classList.add(`newcolor`)
    colordiv.classList.add(`colordiv`)
    rgbname.classList.add(`rgbname`)
    document.querySelector(`.row3`).appendChild(newcolor)
    newcolor.appendChild(colordiv);
    newcolor.appendChild(rgbname);
    colordiv.style.backgroundColor = `rgb(${RED}, ${GREEN}, ${BLUE})`
    rgbname.textContent = `rgb(${RED}, ${GREEN}, ${BLUE})`
}



