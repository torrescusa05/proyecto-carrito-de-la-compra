// Función para mostrar el formulario adecuado
function mostrarFormulario(id) {
    const aparece = document.getElementById('aparece');

    if (id === 'tarjeta') 
    {
        aparece.innerHTML = 
        `
                <div style="margin: 0 0 20px 0" class="rotura">
                    <label for="numeroTarjeta">Número de tarjeta:</label>
                    <input type="number" id="numerotarjeta" placeholder="1234 5678 9101 1121" required max="9999999999999999" min="0000000000000000">   
                    <label for="fechaExpiracion">Fecha de expiración:</label>
                    <input type="month" id="fechaExpiracion" required min="2025-04-11"><br>   
                </div>
                <div class="rotura">
                    <label for="codigoSeguridad">Código de seguridad (CVV):</label>
                    <input type="number" id="codigoSeguridad" placeholder="123" required max="999" min="000">
                    <label for="nombreTitular">Nombre del titular:</label>
                    <input type="text" id="nombreTitular" placeholder="José García" required>
                </div>
                <div>
                    <button onclick="confirmarcompra()" id="pagar">Realizar pago</button>
                </div>
        `;
    } 
    else if (id === 'cuenta') 
    {
        aparece.innerHTML = 
        `
            <div style="margin: 0 0 20px 0">
                <label for="iban">Número IBAN:</label>
                <input type="text" id="iban" value="ES12 3456 7890 1234 5678 9101" required>
            </div>
            <div>
                <label for="titularCuenta">Titular de la cuenta:</label>
                <input type="text" id="titularCuenta" placeholder="José García" required>
            </div>
            <div>
                <button onclick="confirmarcompra()" id="pagar">Realizar pago</button>
            </div>
        `;
    }
}

function confirmarcompra() {
    
    comprobardni();
    validartarjeta();
}

function comprobardni () {
    
    var letras='TRWAGMYFPDXBNJZSQVHLCKET';

    var posicion=document.getElementById('dni').value%23;

    var letracalculada=letras.substring(posicion, posicion + 1);

    var letraintroducida=document.getElementById('letra').value;

    letraintroducida = letraintroducida.toUpperCase();

    if(letracalculada!=letraintroducida)
    {
        alert('DNI incorrecto, por favor introduzca un DNI válido');
    }
}

function validartarjeta () {
    const numero= document.getElementById('numerotarjeta').value;
    const digitos= [...numero].reverse().map(numero => parseInt(numero));

    const sumatorio = digitos.reduce( (acumulado, numero, indice) =>
    {
        if(indice%2==1)
        {
            var doble = numero*2;
            return acumulado + (doble > 9 ? doble -9 : doble);
        }
        return acumulado + numero;
    }, 0)

    if (sumatorio%10 != 0)
    {
        alert('Tarjeta incorrecta, la tarjeta introducida no es válida');
    }
    else
    {
        alert('Su compra ha sido realizada, muchas gracias por su atención.');
    }
}


