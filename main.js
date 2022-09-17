alert('sueldo empleado ')

let pagoH = 15300;

let nombre = (prompt('ingrese su nombre'));
let horas = parseFloat(prompt('ingrese las horas trabajadas'));

let pago = horas * pagoH;

document.getElementById('nombre').innerHTML = nombre;
document.getElementById('res').innerHTML = pago + ' pesos';





