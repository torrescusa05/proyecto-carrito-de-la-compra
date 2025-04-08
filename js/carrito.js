// Array de productos con nombre, precio y cantidad
const productos = [
    { id: 0, nombre: "Boquerones", precio: 3.87 },
    { id: 1, nombre: "Acedias", precio: 12.10 },
    { id: 2, nombre: "Choco", precio: 21.00 },
    { id: 3, nombre: "Puntillitas", precio: 22.75 },
    { id: 4, nombre: "Doradas", precio: 9.90 },
    { id: 5, nombre: "Sardinas", precio: 15.50 }
];

// Cargar productos del carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para añadir un producto al carrito
function anadirproducto(id) {
    const cantidad = document.getElementById(`kilos${productos[id].nombre.toLowerCase()}`).value;
    
    if (cantidad > 0) {
        const producto = productos[id];
        const productoEnCarrito = carrito.find(item => item.id === producto.id);
        
        // Si el producto ya está en el carrito, actualizamos la cantidad
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += parseInt(cantidad);
        } else {
            // Si el producto no está en el carrito, lo añadimos
            carrito.push({ ...producto, cantidad: parseInt(cantidad) });
        }

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    } else {
        alert("Por favor, ingresa una cantidad mayor a 0.");
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoHtml = document.getElementById("carrito");
    const totalElemento = document.getElementById("total");

    carritoHtml.innerHTML = '';  // Limpiar el carrito antes de mostrar los productos
    let total = 0;

    // Si no hay productos en el carrito
    if (carrito.length === 0) {
        carritoHtml.innerHTML = "<p>No hay nada dentro del carrito</p>";
        totalElemento.innerHTML = '0.00';
    } else {
        carrito.forEach(item => {
            const productoHtml = document.createElement('li');
            productoHtml.innerHTML = `${item.nombre} x ${item.cantidad} - ${item.precio * item.cantidad} € 
                                      <button onclick="eliminarProducto(${item.id})">Eliminar</button>`;
            carritoHtml.appendChild(productoHtml);
            total += item.precio * item.cantidad;
        });

        totalElemento.innerHTML = total.toFixed(2);
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    carrito = carrito.filter(item => item.id !== id);
    
    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para eliminar todo el carrito
function eliminarcarro() {
    carrito = [];
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Llamada para mostrar el carrito cuando se carga la página
mostrarCarrito();
