alert('hallar el area de un triangulo')
let base = parseInt(prompt('Ingrese la base'));
let alt = parseInt(prompt('Ingrese la altura'));


let area = (base * alt) / 2;


document.getElementById('area').innerHTML = area;


