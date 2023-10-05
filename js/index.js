/* Previene que se pueda escribir letras en el input search */

function preventNonNumericalInput(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }


/* Plazo Fijo */
const monto = document.querySelector('#monto');
const dias = document.querySelector('#dias');
const resultado = document.querySelector('.resultado');
const btn = document.querySelector('.simular_btn');
const printInt = document.querySelector('.int');
const date = document.querySelector('.date');

/* Conversor */

const cantidad = document.querySelector('#cantidad');
const monedaA = document.querySelector('#currency_i');
const monedaB = document.querySelector('#currency_f');
const conversorBtn = document.querySelector('.conversor_btn')
const mostrar = document.querySelector('.conv_final');

// Funcionalidad Plazo Fijo 

function calcularPlazoFijo(montoInicial, plazo) {

    const interesesGenerados = ((montoInicial * 1.18) / 365) * plazo;
    const montoTotal = parseInt(monto.value) + parseInt(interesesGenerados);

    function sumarDiasAFechaActual(diasASumar) {
        const fechaActual = new Date(); // Obtiene la fecha y hora actual
        fechaActual.setDate(fechaActual.getDate() + diasASumar); // Suma la cantidad de días especificada
        return fechaActual;
    }

    const vencimiento = sumarDiasAFechaActual(parseInt(dias.value));

    resultado.innerHTML = `<span>${montoTotal.toFixed(3)}</span>`;
    printInt.innerHTML = `<span>${interesesGenerados.toFixed(3)}</span>`;
    date.innerHTML = `<span>${vencimiento.toLocaleDateString()}</span>`;
}

btn.addEventListener('click', () => {
    if (monto.value != '' && dias.value != '') {
        calcularPlazoFijo(monto.value , dias.value); 
    }
} );

// Funcionalidad Conversor De Monedas 

function convertir () {

    const dolar = 740;
    const euro = 402;

    switch (true) {
        // De Peso a Dolar
        case monedaA.value == "Peso" && monedaB.value == "Dolar" : 
            conversion = cantidad.value / dolar;
            mostrar.innerHTML = `${conversion.toFixed(3)} Dolares`
            break;

        // De Peso a Euro
        case monedaA.value == "Peso" && monedaB.value == "Euro":
            conversion = cantidad.value / euro;
            mostrar.innerHTML = `${conversion.toFixed(3)} Euros`
            break;

        // De Dolar a Peso
        case monedaA.value == "Dolar" && monedaB.value == "Peso":
            conversion = cantidad.value * dolar;
            mostrar.innerHTML = `${conversion.toFixed(3)} Pesos`
            break;

        // De Dolar a Euro
        case monedaA.value == "Dolar" && monedaB.value == "Euro":
            conversion = cantidad.value / (dolar/euro);
            mostrar.innerHTML = `${conversion.toFixed(3)}Euros`
            break;

        // De Euro a Peso
        case monedaA.value == "Euro" && monedaB.value == "Peso":
            conversion = cantidad.value * euro;
            mostrar.innerHTML = `${conversion.toFixed(3)} Pesos`
            break;

        // De Euro a Dolar
        case monedaA.value == "Euro" && monedaB.value == "Dolar":
            conversion = cantidad.value / (euro / dolar);
            mostrar.innerHTML = `${conversion.toFixed(3)} Dolares`
            break;

        default:
        alert('Los datos que ingreso, no son validos');
        break;
    } 
}


conversorBtn.addEventListener('click', () => {
    convertir()
})