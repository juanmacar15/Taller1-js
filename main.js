alert('hallar la raiz real de la siguiente ecuacion a * x2 + b * x + c siendo x un valor constante ')

const x = 3;

let a = parseInt(prompt('Ingrese el valor de a'));
let b = parseInt(prompt('Ingrese el valor de b'));
let c = parseInt(prompt('Ingrese el valor de c'));

res= a * x**2 + b * x + c

document.getElementById('res').innerHTML = res;



