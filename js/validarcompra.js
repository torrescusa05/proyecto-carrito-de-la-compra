// Función para mostrar el formulario adecuado
function mostrarFormulario(id) {
    const aparece = document.getElementById('aparece');

    if (id === 'tarjeta') 
    {
        aparece.innerHTML = 
        `
                <div style="margin: 0 0 20px 0" class="rotura">
                    <label for="numeroTarjeta">Número de tarjeta:</label>
                    <input type="text" id="numeroTarjeta" placeholder="1234 5678 9101 1121" required>    
                    <label for="fechaExpiracion">Fecha de expiración:</label>
                    <input type="month" id="fechaExpiracion" required><br>   
                </div>
                <div class="rotura">
                    <label for="codigoSeguridad">Código de seguridad (CVV):</label>
                    <input type="text" id="codigoSeguridad" placeholder="123" required>
                    <label for="nombreTitular">Nombre del titular:</label>
                    <input type="text" id="nombreTitular" placeholder="José Pérez" required>
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
                <input type="text" id="iban" placeholder="ES12 3456 7890 1234 5678 9101" required>
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