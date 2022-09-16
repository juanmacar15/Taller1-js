alert('hallar la siguiente formula (a+7*c)/(b+2-a)+2*b ')

const pi = 3.1416;

let a = parseInt(prompt('Ingrese el valor de a'));
let b = parseInt(prompt('Ingrese el valor de b'));
let c = parseInt(prompt('Ingrese el valor de c'));


let formula = (a+7*c)/(b+2-a)+2*b;

document.getElementById('formula').innerHTML = formula;



