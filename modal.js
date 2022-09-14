const modalContendor = document.querySelector(".modal-container")
const abrirCarrito = document.getElementById("open")
const cerrarCarrito = document.getElementById("cerrar")
const modalCarrito = document.querySelector(".modal-carrito")

abrirCarrito.addEventListener("click", ()=>{
    modalContendor.classList.toggle("modal-active")
} )

cerrarCarrito.addEventListener("click", ()=>{
    modalContendor.classList.remove("modal-active")
})

modalContendor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})