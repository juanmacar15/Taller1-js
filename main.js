let n1 = parseInt(prompt('Ingresar numero 1'));
let n2 = parseInt(prompt('Ingresar numero 2'));

let suma = n1 + n2;
let resta = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;

document.getElementById('suma').innerHTML = suma;
document.getElementById('resta').innerHTML = resta;
document.getElementById('mult').innerHTML = mult;
document.getElementById('div').innerHTML = div;

