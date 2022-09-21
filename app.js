const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById( `boton${producto.id}` )

        boton.addEventListener('click', ()=> {
            carritoIndex(producto.id)
            alert(`Se agrego el producto ${producto.nombre}`)
        })

    })
}


mostrarProductos(productos)
localStorage.setItem('productos', JSON.stringify(productos));

function cambiarPrecio(nombre,precio){
    let array = JSON.parse(localStorage.getItem('productos'));
    const producto = array.find(elemento => elemento.nombre === nombre);
    console.log(localStorage.getItem('productos'));
    producto.precio = precio;
    localStorage.setItem('productos', JSON.stringify(array));
    console.log(localStorage.getItem('productos'));
}

cambiarPrecio('Correa', 2000);
