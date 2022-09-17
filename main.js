alert('hallar el volumen de un elipsoide ')

const pi = 3.1416;

let a = parseInt(prompt('Ingrese el valor de a'));
let b = parseInt(prompt('Ingrese el valor de b'));
let c = parseInt(prompt('Ingrese el valor de c'));

vol= (4/3) * pi * a * b * c

document.getElementById('res').innerHTML = vol;



