alert('hallar la media de 4 numeros')
let n1 = parseInt(prompt('Ingrese el primer numero'));
let n2 = parseInt(prompt('Ingrese el segundo numero'));
let n3 = parseInt(prompt('Ingrese el tercer numero'));
let n4 = parseInt(prompt('Ingrese el cuarto numero'));

let media = (n1 + n2 + n3 + n4) / 4;


document.getElementById('media').innerHTML = media;


