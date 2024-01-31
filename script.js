const btnModal = document.getElementById("btnModal")


btnModal.addEventListener("click", ()=> {
    btnModal.classList.add("hidden")
    menu.classList.remove("hidden")
    container.classList.remove('hidden')
})
const ikon = document.getElementById('ikon')
const menu = document.getElementById('menu')
const container = document.getElementById('container')


ikon.addEventListener("click", ()=>{
btnModal.classList.remove("hidden")
menu.classList.add('hidden')
container.classList.add('hidden')


})

