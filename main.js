alert('convertir velocidad en m/s')

let dis = parseInt(prompt('Ingrese la distancia en km'));
let tiempo = parseInt(prompt('Ingrese el tiempo que demoro'));

let metros = dis * 1000;
let seg = tiempo * 60;

let vel = metros / seg

document.getElementById('vel').innerHTML = vel +' m/s';



