alert('descuento de producto ')

let prod = parseFloat(prompt('ingrese el valor del producto'));

let des = prod * 0.10;
let res =  prod - des;

document.getElementById('prod').innerHTML = prod;
document.getElementById('des').innerHTML = des;
document.getElementById('res').innerHTML = res;



