
const menu = document . querySelector("menu");
const action = document . querySelector("menu");

menu.addEventListener("click" , ()=>{
hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
}
