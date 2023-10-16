Swal.fire({
    title: 'Bienvenido',
  })


/* Plazo Fijo */
const monto = document.querySelector('#monto');
const dias = document.querySelector('#dias');
const resultado = document.querySelector('.resultado');
const btn = document.querySelector('.simular_btn');
const printInt = document.querySelector('.int');
const date = document.querySelector('.date');

/* Cotizacion */

const url = 'https://dolarapi.com/v1/dolares';
const options = {method: 'GET', headers: {Accept: 'application/json'}};
const cotizacion = document.querySelector('.cotizacion');


/* Logout */

const logoutBtn = document.querySelector('.logout__btn');


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

// function convertir () {
    
//     const dolar = 367;
//     const euro = 402;

//     let conversion;
//     if(cantidad.value == '') {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//           })
//     } else {
//         switch (true) {
//             // De Peso a Dolar
//             case monedaA.value == "Peso" && monedaB.value == "Dolar" : 
//                 conversion = cantidad.value / dolar;
//                 mostrar.innerHTML = `${conversion.toFixed(3)} Dolares`
//                 break;
    
//             // De Peso a Euro
//             case monedaA.value == "Peso" && monedaB.value == "Euro":
//                 conversion = cantidad.value / euro;
//                 mostrar.innerHTML = `${conversion.toFixed(3)} Euros`
//                 break;
    
//             // De Dolar a Peso
//             case monedaA.value == "Dolar" && monedaB.value == "Peso":
//                 conversion = cantidad.value * dolar;
//                 mostrar.innerHTML = `${conversion.toFixed(3)} Pesos`
//                 break;
    
//             // De Dolar a Euro
//             case monedaA.value == "Dolar" && monedaB.value == "Euro":
//                 conversion = cantidad.value / (dolar/euro);
//                 mostrar.innerHTML = `${conversion.toFixed(3)} Euros`
//                 break;
    
//             // De Euro a Peso
//             case monedaA.value == "Euro" && monedaB.value == "Peso":
//                 conversion = cantidad.value * euro;
//                 mostrar.innerHTML = `${conversion.toFixed(3)}  Pesos`
//                 break;
    
//             // De Euro a Dolar
//             case monedaA.value == "Euro" && monedaB.value == "Dolar":
//                 conversion = cantidad.value / (euro / dolar);
//                 mostrar.innerHTML = `${conversion.toFixed(3)}  Dolares`
//                 break;
//         } 
//     }
 
// }


// conversorBtn.addEventListener('click', () => {
//     convertir()
// });


/* Cotizacion */

fetch(url, options)
.then( (response) => response.json() )
.then( (data) => {
    const dolares = data.slice(0, 2);
    console.log(dolares);

    dolares.forEach( item => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
        <h2>Dolar ${item.nombre}</h2>
        <p>Compra: $ ${item.compra}</p>
        <p>Venta: $ ${item.venta}</p>
        `;

        cotizacion.appendChild(div);
    })

});

// Logout 

const user = JSON.parse(localStorage.getItem('login_succes')) || false

if(!user){
    window.location.href = 'login.html'
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('login_succes')
    window.location.href = 'login.html'
})

