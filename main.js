alert('sueldo de ventas ')


let sueldo = parseFloat(prompt('ingrese el sueldo del empleado'));
let venta1 = parseFloat(prompt('ingrese el precio de la primera venta'));
let venta2 = parseFloat(prompt('ingrese el precio de la segunda venta'));
let venta3 = parseFloat(prompt('ingrese el precio de la tercera venta'));

let com = (venta1 + venta2 + venta3) * 0.10;
let total = sueldo + com;

document.getElementById('com').innerHTML = com + ' pesos';
document.getElementById('total').innerHTML = total + ' pesos';








