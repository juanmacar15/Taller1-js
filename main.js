alert('venta de minutos ')

const min = 355;

let tiempo = parseInt(prompt('¿cuantos minutos hablò?'));

let tTotal = tiempo * min;
let iva = tTotal * 0.20;
let totalpagar = tTotal + iva;

document.getElementById('res').innerHTML = totalpagar + ' pesos';



