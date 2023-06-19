const menu = document.querySelector(".menu")
const closebtn = document.querySelector(".close")
const module = document.querySelector(".module")

menu.addEventListener("click" , ()=>{
    menu.style.display="none"
    closebtn.style.display="block"
    module.style.display="flex"
})


closebtn.addEventListener("click" , ()=>{
    menu.style.display="block"
    closebtn.style.display="none"
    module.style.display="none"
})