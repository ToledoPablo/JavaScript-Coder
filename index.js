/**
 * La idea es hacer una pagina de un banco, en la cual se pueda convertir monedas, hacer plazos fijos (mostrando los intereses generados y el monto total) y sacar creditos ( mostrando el interes dependiendo la cantidad de cuotas)
 */




let dolar = 740;
let euro = 402;

let monedaA = prompt("Ingrese la moneda que quiere cambiar (Peso, Dolar, Euro)");
let cantidad = parseInt(prompt('Ingrese el monto a cambiar'));
let monedaB = prompt('Ingrese la moneda a la que quiere cambiar (Peso, Dolar, Euro)');

let moneda1 = monedaA.toLowerCase();
let moneda2 = monedaB.toLowerCase();

function convertir (moneda1, cantidad, moneda2) {
    switch (true) {
        // De Peso a Dolar
        case moneda1 == "peso" && moneda2 == "dolar" : 
            resultado = cantidad / dolar;
            console.log(resultado);
            alert("Ahora tu monto es de: " + resultado + ' dolares');
            break;
        // De Peso a Euro
        case moneda1 == "peso" && moneda2 == "euro":
            resultado = cantidad / euro;
            console.log(resultado);
            alert("Ahora tu monton es de: " + resultado + ' euros');
            break;
        // De Dolar a Peso
        case moneda1 == "dolar" && moneda2 == "peso":
            resultado = cantidad * dolar;
            console.log(resultado);
            alert("Ahora tu monton es de: " + resultado + ' pesos');
            break;
        // De Dolar a Euro
        case moneda1 == "dolar" && moneda2 == "euro":
            resultado = cantida / (dolar/euro);
            console.log(resultado);
            alert("Ahora tu monton es de: " + resultado + ' euros');
            break;
        // De Euro a Peso
        case moneda1 == "euro" && moneda2 == "peso":
            resultado = cantidad * euro;
            console.log(resultado);
            alert("Ahora tu monton es de: " + resultado + ' pesos');
            break;
        // De Euro a Dolar
        case moneda1 == "euro" && moneda2 == "dolar":
            resultado = cantidad / (euro / dolar);
            console.log(resultado);
            alert("Ahora tu monton es de: " + resultado + ' dolares');
            break;
        default:
        alert('Los datos que ingreso, no son validos');
        break;
    } 
}

//convertir (moneda1, cantidad, moneda2);


let monto = parseInt(prompt('Ingrese el monto (Minimo $1000)'));
let plazo = parseInt(prompt('Ingrese la cantidad de dias ( Minimo 30 dias)'));

function plazoFijo (monto, plazo) {
    interesesGenerados = ((monto * 1.18) / 365) * plazo;
    montoTotal = interesesGenerados + monto;

    alert('Sus intereses generados son de ' + interesesGenerados + ' pesos');
    alert('Su monto total es de ' + montoTotal);
}

//plazoFijo(monto, plazo);