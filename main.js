alert('IVA de producto ')

let pro = parseFloat(prompt('valor del producto'));
let iva = parseFloat(prompt('digite el iva sin el singo %'));

let iva2=iva/100;
let iva3=pro*iva2;

let total = pro + iva3;

document.getElementById('iva').innerHTML = iva3 + ' pesos';
document.getElementById('res').innerHTML = total + ' pesos';




