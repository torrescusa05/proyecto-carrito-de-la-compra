//Carrito de la compra
var listadelacompra = [];
var preciosdelacompra = [];


function boquerones() 
{
    var precio = 3.87;
    var kilos = parseInt(document.getElementById('kilosboquerones').value);
    var totalprecio;
    if (isNaN(kilos))
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Boquerones');
    }
}

function acedias() 
{
    var precio = 12.10;
    var kilos = parseInt(document.getElementById('kilosacedias').value);
    var totalprecio;
    if (kilos == isNaN)
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Acedias');
    }
}

function choco() 
{
    var precio = 21.00;
    var kilos = parseInt(document.getElementById('kiloschoco').value);
    var totalprecio;
    if (kilos == isNaN)
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Choco');
    }
}

function puntillitas() 
{
    var precio = 22.75;
    var kilos = parseInt(document.getElementById('kilospuntillitas').value);
    var totalprecio;
    if (kilos == isNaN)
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Puntillitas');
    }
}

function doradas() 
{
    var precio = 9.90;
    var kilos = parseInt(document.getElementById('kilosacedias').value);
    var totalprecio;
    if (kilos == isNaN)
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Doradas');
    }
}

function sardinas() 
{
    var precio = 15.50;
    var kilos = parseInt(document.getElementById('kilosacedias').value);
    var totalprecio;
    if (kilos == isNaN)
    {
        alert('Por favor introduzca un número de kilos válidos (1,2,3,...)')
    }
    else
    {
        totalprecio = precio * kilos;
        var anadirprecio = preciosdelacompra.push(totalprecio);
        var anadirlistacompra = listadelacompra.push('Sardinas');
    }
}