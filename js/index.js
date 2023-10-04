/* Previene que se pueda escribir letras en el input search */

function preventNonNumericalInput(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }



const monto = document.querySelector('#monto');
const dias = document.querySelector('#dias');
const resultado = document.querySelector('.resultado');
const btn = document.querySelector('.simular_btn');
const printInt = document.querySelector('.int');
const date = document.querySelector('.date');



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