/* let carritoDeCompras = []

const botonVaciar = document.getElementById('vaciar-carrito')   
botonVaciar.addEventListener('click', () => {
    carritoDeCompras.length = 0
    renderProductosCarrito()
})
const eliminarDelCarrito = (productoId) => {
    const item = productos.find ((producto) => productos.id === productoID)
    const indice = productos.indexOf(item)
    productos.splice (indice, 1)
    renderProductosCarrito()
}


const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick="eliminarDelCarrito${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()
}
 */
