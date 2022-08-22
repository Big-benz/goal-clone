
let insideNavbar = document.querySelector("#inside-navbar");
document.querySelector("#culture").onclick = () => {
    insideNavbar.classList.toggle("active");
}
let settingsTab = document.querySelector("#settings-tab");
document.querySelector("#settings").onclick = () => {
    settingsTab.classList.toggle("active");
}
let eplContainer = document.querySelector("#epl-container");
document.querySelector("#premier").onclick = () => {
    eplContainer.classList.toggle("active")

}
let laligaContainer = document.querySelector("#laliga-container");
document.querySelector("#laliga").onclick = function () {
    laligaContainer.classList.toggle("active")

}
let afconContainer = document.querySelector("#afcon-container");
document.querySelector("#afcon").onclick = () => {
    afconContainer.classList.toggle("active")

}

let moreContainer = document.querySelector("#more-container");
document.querySelector("#more").onclick = () => {
    moreContainer.classList.toggle("active")

}


const selectElement = (selector) => {
    const element =  document.querySelector(selector)
    if(element) return element;
    throw new Error("something went wrong, make sure that $(selector) exists or is typed correctly")
};
{
const openIcon = selectElement("#search-icon");
const closeIcon = selectElement("#close-icon");
const searchBoxContainer = selectElement("#search-box-container");
openIcon.addEventListener("click", () => searchBoxContainer.classList.add("activated"));
closeIcon.addEventListener("click", () => searchBoxContainer.classList.remove("activated"));
};
window.onload =  () => {
let time = new Date ()
let greetingElement= selectElement("#greeting")
let greeting = "Hello football fans,"
if(time.getHours() < 12){
    greeting = greeting + " good morning.... "
}
else if(time.getHours() < 18){
    greeting = greeting + " good afternoon... "
}
else{
    greeting = greeting + " good evening.... "
}
greetingElement.innerText = greeting;

}
const bodyPage = selectElement("#body");
const sunToggle = selectElement("#theme-toggle-btn");
sunToggle.addEventListener("click", () => bodyPage.classList.toggle("light-theme"));



vanishButton = () => {
    const toTopButton = selectElement("#to-top");
    if(this.scrollY > 700){
        toTopButton.classList.add("active");
    }
    else{
        toTopButton.classList.remove("active")
    }
}
window.addEventListener("scroll", vanishButton);

// age =  15;
// if (age >=16 && 12){
//     console.log("your papa")
// }
// else{
//     console.log("cool")
// }
// function square (number){
//     return number/number
// }
// const number = square (23);
// console.log(number)
// let number = 40;
// number +=5
// console.log(number);

// const firstName = "Williams";
// const lastName = "Oreoluwa";
// console.log("  My name is  " +  lastName  +  firstName);
// let d = 5;
// let f = 3;
// return ()=>{
// console.log(d/f)};

