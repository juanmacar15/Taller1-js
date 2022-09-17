alert('conversor de velocidad ')

let vel = parseFloat(prompt('ingrese la velocidad en km'));

let res = vel * (1000) * (1/3600);

document.getElementById('res').innerHTML = res + ' m/s';



