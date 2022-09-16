alert('hallar el volumen de una esfera')

const pi = 3.1416;

let radio = parseInt(prompt('Ingrese el radio de la esfera'));


let vol = 4/3 * pi * radio ** 3;

document.getElementById('vol').innerHTML = vol;



