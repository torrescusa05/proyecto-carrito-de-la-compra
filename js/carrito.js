//Variable con objetos donde cada objeto tendrá un id, un nombre y un precio toFixed(2),
//estos objetos se llamarán a la hora de ejecutar las funciones.
const productos = [
    { id: 0, nombre: "Boquerones", precio: 3.87 },
    { id: 1, nombre: "Acedias", precio: 12.10 },
    { id: 2, nombre: "Choco", precio: 21.00 },
    { id: 3, nombre: "Puntillitas", precio: 22.75 },
    { id: 4, nombre: "Doradas", precio: 9.90 },
    { id: 5, nombre: "Sardinas", precio: 15.50 }
];

//Carga los elementos del carrito, buscando a través del item 'carrito' en local storage
//guardado cada vez que añadimos algo. JSON.parse --> Nos permite transformar una cadena
//a objeto, en la variable carrito vemos que los elementos del localstorage los guarda
//en un array como objetos, es decir mantiene un array paralelo con productos.
var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Añade productos al carrito mediante los botones de cada tarjeta de producto, y para hacer alusión
//al producto que estamos añadiendo ponemos id, es decir declaramos la función id mediante la función.
function anadirproducto(id) 
{
    //Declaramos la variable cantidad, que para encontrar a cuál nos referimos buscamos por id
    //al botón que hace referencia, para ello utilizamos una búsqueda concatenada con kilos y buscamos
    //con todo en minuscula el nombre, ya que el nombre de productos es el mismo que los id de los botones,
    //y transformamos el nombre de los productos en minúsculas.
    //
    //Si la cantidad es mayor a 0, declaramos una variable en relación a los productos, que recoja el id
    //que hace referencia. Después comparamos mediantes strings que el producto del carrito sea igual
    //al producto definido en const producto.
    //Si el programa detecta que el valor es menor a 0 e inclusive texto, avisa al usuario vía popUp.
    const cantidad = document.getElementById(`kilos${productos[id].nombre.toLowerCase()}`).value;
    
    if (cantidad > 0) 
    {
        const producto = productos[id];
        const productoEnCarrito = carrito.find(item => item.id === producto.id);
        // Si el producto ya está en el carrito, actualizamos la cantidad, para ello
        //definimos la constante productoencarrito añada la variable cantidad.
        //Y si no está definido, lo añadimos al Array de carrito mediante un push.
        if (productoEnCarrito) 
        {
            productoEnCarrito.cantidad += parseInt(cantidad);
        } 
        else 
        {
            carrito.push({ ...producto, cantidad: parseInt(cantidad) });
        }
        // Guardamos el carrito en el localstorage, JSON.stringify transforma un objeto en cadena, es
        //decir, realiza lo contrario a JSON.parse. En este caso todos los objetos guardados en carrito
        //los pasa a cadena nuevamente para mostrarlo. Después invocamos la función para mostrar el carro. 
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
    else 
    {
        alert("Por favor, ingresa una cantidad mayor a 0.");
    }
}

// Función para mostrar los productos en el carrito, para ello usaremos los divs asignados en html.
function mostrarCarrito()
{
    const carritohtml = document.getElementById("carrito");
    const totalElemento = document.getElementById("total");
    const validar = document.getElementById("validar");
    carritohtml.innerHTML = '';  // Limpiar el carrito antes de mostrar los productos
    var total = 0;

    // Si no hay productos en el carrito, indicamos que no hay ningún elemento y que el valor actual son 0€.
    //Si hay productos añadimos un elemento más a la lista y concatenamos mediante los objetos y calculamos
    //el total de dicho elemento según la cantidad elegida.
    if (carrito.length === 0) 
    {
        carritohtml.innerHTML = "<p>No hay nada dentro del carrito</p>";
        totalElemento.innerHTML = '0,00';
        validar.innerHTML= '';
    } 
    else 
    {
        carrito.forEach(item => 
        {
            const productohtml = document.createElement('li');
            productohtml.innerHTML = `${item.nombre} x ${item.cantidad}Kg - ${item.precio * item.cantidad} € 
                                    <button onclick="eliminarProducto(${item.id})">X</button>`;
            carritohtml.appendChild(productohtml);
            total += item.precio * item.cantidad;
        });
        totalElemento.innerHTML = total.toFixed(2).replace('.',',');
        validar.innerHTML = `<button>Confirmar compra</button>`;     
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) 
{
    carrito = carrito.filter(item => item.id !== id);
    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para eliminar todo el carrito, vacía el array del carro.
function eliminarcarro() {
    carrito = [];
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Llamada para mostrar el carrito cuando se carga la página. Sin este elemento al recargar la página
// o cerrarla encontraremos que no aparece los elementos del carro pero están guardados en caché, nos
// permite esperar la ejecución de la función hasta que no cargue completamente el código DOM del nav.
document.addEventListener('DOMContentLoaded', function(){
    mostrarCarrito();
});

