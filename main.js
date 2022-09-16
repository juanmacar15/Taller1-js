alert('hallar la longitud y el area de un circulo')

const pi = 3.1416;

let radio = parseInt(prompt('Ingrese el radio del circulo'));


let long = 2 * pi * radio;
let area = pi * radio**2;


document.getElementById('long').innerHTML = long;
document.getElementById('area').innerHTML = area;


