const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById("vaciar-carrito");

const contadorCarrito = document.getElementById("contadorCarrito");

const cantidad = document.getElementById("cantidad");
const precioTotal = document.getElementById("precioTotal");
const cantidadTotal = document.getElementById("cantidadTotal");
let data;
let carrito = [];
botonVaciar.addEventListener("click", () => {
  Swal.fire({
    title: "Quieres vaciar el carrito?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "CANCELAR",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SI",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("El carrito está vacío", "Vuelve a llenarlo!!");
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    }
  });
});

const traerDatos = async () => {
  const response = await fetch("./stock.json");
  data = await response.json();
  data.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src=${producto.img} alt= "">
      <h3>${producto.nombre}</h3>
      <p class="precioProducto">Precio:$ ${producto.precio}</p>
      <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
      `;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};
traerDatos();

/* stockProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `;
  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`agregar${producto.id}`);

  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
}); */

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some((prod) => prod.id === prodId); //comprobar si el elemento ya existe en el carrito
  let nombreProducto = "";
  if (existe) {
    carrito = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
        nombreProducto = prod.nombre;
      }
      return prod;
    });
  } else {
    const item = data.find((prod) => prod.id === prodId);
    carrito.push(item);
    nombreProducto = item.nombre;
  }
  Swal.fire({
    title: "Perfecto",
    text: `Se agrego el producto ${nombreProducto}`,
    icon: "success",
    confirmButtonText: "OK",
  });
  actualizarCarrito();
};
const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);

  const indice = carrito.indexOf(item);

  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;

    contenedorCarrito.appendChild(div);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
  contadorCarrito.innerText = carrito.length;
  precioTotal.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
};

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  actualizarCarrito();
}
