let drshow = document.querySelector("#drshow")
let button = document.querySelector("#btn")
let dropdown = document.querySelector(".dropdown")

function show() {
    drshow.style.display = "none"
    dropdown.style.display = "block"
    button.style.display = "block"
}
function myFunction() {
    dropdown.style.display = "none"
    drshow.style.display = "block"
    button.style.display = "none"
}

let servicesX = document.querySelector("#servicesX")
let servicesdiv = document.querySelector("#servicesdiv")
function servisekecid() {
    servicesdiv.style.display = "block"
}
function servisekecidgizle() {
    servicesdiv.style.display = "none"
}

let solutionsX = document.querySelector("#solutionsX")
let solutionsdiv = document.querySelector("#solutionsdiv")
function solutionskecid() {
    solutionsdiv.style.display = "block"
}
function solutionsgizle() {
    solutionsdiv.style.display = "none"
}

let servicesDropdown = document.querySelector("#servicesdropdown")
let dropdownHid = document.querySelector("#dropdown-hid")
dropdownHid.style.display = "none"
function showDropdown() {
    dropdownHid.style.display = "block"
    dropdownHid.style.display = "flex"
}

dropdownHid.onmouseleave = function hidden() {
    dropdownHid.style.display = "none"
}
