alert('hallar el area y el volumen de un cilindro')

const pi = 3.1416;

let rad = parseInt(prompt('Ingrese el raio del cilindro'));
let alt = parseInt(prompt('Ingrese la altura del cilindro'));

let area= (2 * (pi * rad**2)) + ((2 * pi * rad) * alt)
let vol= (pi * rad**2) * alt

document.getElementById('area').innerHTML = area;
document.getElementById('vol').innerHTML = vol;



