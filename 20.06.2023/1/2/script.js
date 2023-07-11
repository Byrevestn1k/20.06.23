
function valueChack(a) {
    let flag = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].value == `` || (/^ /.test(a[i].value))) {
            flag++
        }
        else {
            a[i].style.border = `2px green solid`;
        }
    }
    if (flag > 0) {
        return false;
    }
    else {
        return true;
    }
}
function passwordChack(password) {

    if (!/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/.test(password.value) || password.value != password2.value) {
        if (password.value != password2.value) {
            password2.style.border = `2px red solid `;
        }
        password.style.border = `2px red solid `;
        return false
    }
    else {
        password.style.border = `2px green solid `;
        return true
    }
}

let form = document.forms[0]
let input = document.querySelectorAll(`input`)
let password = document.forms[0].password;
let inputRemember = document.forms[0].Remember;
let button1 = document.querySelector(`.but1`)
console.log(inputRemember)
button1.addEventListener('click', (e) => {
    valueChack(input)

    if (!valueChack(input)) {
        e.preventDefault()
    }
    else {
        if (inputRemember.checked) {
            alert(`Я тебе запам’ятав!`)
        }
        else {
            alert(`Я  тебе НЕ  запам’ятав!`)
        }

    }
})