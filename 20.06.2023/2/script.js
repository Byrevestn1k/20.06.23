

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
    if (password.value != password2.value) {
        password2.style.border = `2px red solid `;

        return false
    }
    else {
        return true
    }
}

let form = document.forms[0]
let input = document.querySelectorAll(`input`)
let password = document.forms[0].password;
let password2 = document.forms[0].password2;
let button1 = document.querySelector(`.but1`)







button1.addEventListener('click', (e) => {
    valueChack(input)
    passwordChack(password)
    if (!valueChack(input) || !passwordChack(password)) {
        e.preventDefault()
    }
    else {
        // alert(`На пошту  (${form.email.value})
        // надіслано лист із підтвердженням`)
        document.forms[0].remove()
        let div = document.createElement(`div`)
        document.body.appendChild(div)
        div.textContent = `На пошту ${form.email.value}
            надіслано лист із підтвердженням`;
        div.classList.add(`post`)

    }
})