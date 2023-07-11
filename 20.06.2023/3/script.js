document.addEventListener("DOMContentLoaded", (e) => {
    optionLoad(ListOfCountry)
});

function optionLoad(ListOfCountry) {
    for (let i = 0; i < ListOfCountry.length; i++) {
        let optionCountry = document.createElement(`option`);//створюємо опшини
        optionCountry.classList.add(`${ListOfCountry[i]}`)//надаємо опшинам клас з назвою країни
        let country = document.forms[0].country; //підключаємося до інпуту з неймом кантрі
        country.appendChild(optionCountry);//підключаємо до інпута опшин
        optionCountry.textContent = ListOfCountry[i];//додакєм текст опшину з назвою країни
        window[ListOfCountry[i]] = document.querySelector(`.${ListOfCountry[i]}`)//
        console.log(window[ListOfCountry[i]])
    }
}
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
function Info(Firstname, Lastname, Birthday, country, Gender, City, skil) {
    this.Firstname = Firstname.value;
    this.Lastname = Lastname.value;
    this.Birthday = Birthday.value;
    this.country = country.value;
    this.Gender = Gender.value;
    this.City = City.value;
    this.skills = skil;
}
function Skill(skills, skil) {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skil.push(skills[i].value)

        }
    }
    console.log(skil)
}


let form = document.forms[0]
let input = document.querySelectorAll(`input`)
let Firstname = document.forms[0].Firstname;
let Birthday = document.forms[0].Birthday;
let country = document.forms[0].country;
let Lastname = document.forms[0].Lastname;
let Gender = document.forms[0].Gender;
let City = document.forms[0].City;
let button1 = document.querySelector(`.but1`)
let skil = []
let cityListUkraine = [`Kiyv`, `Rivne`, `Lutsk`]
let cityListUSA = [`New York`, `Vashington`, `Boston`]
let skills = document.querySelectorAll(`.skills input`)
let info = {
    Firstname: `Firstname.value`,
    Lastname: `Lastname.value`,
    Birthday: `Birthday.value`,
    country: `country.value`,
    Gender: `Gender.value`,
    City: `City.value`,
    skills: `skills.value`
}
let countryList = {
    Ukraine: cityListUkraine,
    USA: cityListUSA,
}
let ListOfCountry = Object.keys(countryList)
let ListOfCity = Object.values(countryList)
let firstnamevalue = document.querySelector(`.firstnamevalue`)
let lastnamevalue = document.querySelector(`.lastnamevalue`)
let birthday = document.querySelector(`.birthday`)
let gender = document.querySelector(`.gendervalue`)
let countryvalue = document.querySelector(`.countryvalue`)
let cityvalue = document.querySelector(`.cityvalue`)
let skillsvalue = document.querySelector(`.skillsvalue`)


console.log(`ListOfCity - список всіх міст ::` + ListOfCity)
console.log(`countryList - об'кт з назвами країн та масивами міст ::` + countryList)
console.log(`ListOfCountry - список країн ::` + ListOfCountry)

button1.addEventListener('click', (e) => {
    Skill(skills, skil)
    let Information = new Info(Firstname, Lastname, Birthday, country, Gender, City, skil)
    let table = document.querySelector(`.table`)
    table.classList.remove(`hidden`)

    firstnamevalue.textContent = Information.Firstname
    lastnamevalue.textContent = Information.Lastname
    birthday.textContent = Information.Birthday
    gender.textContent = Information.Gender
    countryvalue.textContent = Information.country
    cityvalue.textContent = Information.City
    skillsvalue.textContent = Information.skills
    form.remove()
    button1.remove()

})

country.addEventListener("change", () => {
    if (country.value) {
        let countrySelected = country.value;
        let optionCityDel = document.querySelectorAll(`.city option`)//якщо є опшини, їх визначаю
        if (optionCityDel.length > 0) { // удаляю всі попередні опшини
            for (let i = 0; i < optionCityDel.length; i++) {
                City.remove(optionCityDel[i])
            }
        }
        for (let i = 0; i < countryList[countrySelected].length; i++) {// створюю нові опшини залежно від вибраного міста
            let optionCity = document.createElement(`option`);
            City = document.forms[0].City;
            City.appendChild(optionCity);
            optionCity.textContent = countryList[countrySelected][i];
        }
    }
});