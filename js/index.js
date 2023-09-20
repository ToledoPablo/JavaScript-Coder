

function convertir () {

    let dolar = 740;
    let euro = 402;

    let monedaA = prompt("Ingrese la moneda que quiere cambiar (Peso, Dolar, Euro)");
    let cantidad = parseInt(prompt('Ingrese el monto a cambiar'));
    let monedaB = prompt('Ingrese la moneda a la que quiere cambiar (Peso, Dolar, Euro)');

    let moneda1 = monedaA.toLowerCase();
    let moneda2 = monedaB.toLowerCase();
    

    switch (true) {
        // De Peso a Dolar
        case moneda1 == "peso" && moneda2 == "dolar" : 
            resultado = cantidad / dolar;
            console.log(resultado);
            alert(`Ahora tu monto es de: $${resultado.toFixed(2)} dolares`);
            break;
        // De Peso a Euro
        case moneda1 == "peso" && moneda2 == "euro":
            resultado = cantidad / euro;
            console.log(resultado);
            alert(`Ahora tu monton es de: $${resultado.toFixed(2)} euros`);
            break;
        // De Dolar a Peso
        case moneda1 == "dolar" && moneda2 == "peso":
            resultado = cantidad * dolar;
            console.log(resultado);
            alert(`Ahora tu monton es de: $${resultado.toFixed(2)} pesos`);
            break;
        // De Dolar a Euro
        case moneda1 == "dolar" && moneda2 == "euro":
            resultado = cantidad / (dolar/euro);
            console.log(resultado);
            alert(`Ahora tu monton es de: $${resultado.toFixed(2)} euros`);
            break;
        // De Euro a Peso
        case moneda1 == "euro" && moneda2 == "peso":
            resultado = cantidad * euro;
            console.log(resultado);
            alert(`Ahora tu monton es de: $${resultado.toFixed(2)} pesos`);
            break;
        // De Euro a Dolar
        case moneda1 == "euro" && moneda2 == "dolar":
            resultado = cantidad / (euro / dolar);
            console.log(resultado);
            alert(`Ahora tu monton es de: $${resultado.toFixed(2)} dolares`);
            break;
        default:
        alert('Los datos que ingreso, no son validos');
        break;
    } 
}

function calcularPlazoFijo() {
    const montoInicial = parseInt(prompt('Ingrese el monto (Mínimo $1000)'));
    const plazo = parseInt(prompt('Ingrese la cantidad de días (Mínimo 30 días)'));

    const interesesGenerados = ((montoInicial * 1.18) / 365) * plazo;
    const montoTotal = interesesGenerados + montoInicial;

    alert(`Sus intereses generados son de $${interesesGenerados.toFixed(2)} pesos`);
    alert(`Su monto total es de $${montoTotal.toFixed(2)} pesos`);

    function sumarDias(fecha, dias){
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
    
    let vencimientoPlazoFijo = new Date();
    let diaFinal = sumarDias(vencimientoPlazoFijo, plazo);

    
    function PlazoFijo(montoI, plazo, intereses, total, vencimiento) {
        this.montoInicial = montoI,
        this.plazo = plazo,
        this.interesesGenerados = intereses.toFixed(3),
        this.montoTotal = total.toFixed(3),
        this.vencimiento = diaFinal.toLocaleString()
    }

    const nuevoPlazoFijo = new PlazoFijo(montoInicial, plazo, interesesGenerados, montoTotal);

    return nuevoPlazoFijo;
    // No sabia cual la mejor forma de crear el objeto "plazoFijo". No se generalmente se usa el constructor o directamente se crea el objeto como hice abajo, asi que dejo los 2 para la devolucion.


    // const plazoFijo = {
    //     montoInicial: montoInicial,
    //     plazo: plazo,
    //     interesesAlVencimiento: interesesGenerados,
    //     montoTotal: montoTotal
    // }
    // return plazoFijo;
}

const guardarPlazoFijo = [];


function start()  {

    let nuevaOperacion = 'si';

    while (nuevaOperacion === 'si') {

        let operacion = prompt('Que operacion desea realizar? convertir monedas / plazo fijo');

        if (operacion == 'convertir monedas') {
            convertir();
        } else if ( operacion == 'plazo fijo') {
            guardarPlazoFijo.push(calcularPlazoFijo());
            guardarPlazoFijo.forEach( pf => console.log(pf))
        } else {
            alert('No ingreso una operacion valida');
        }
    
        nuevaOperacion = prompt('Desea realizar otra operacion? si / no');

    }
}

//start();


