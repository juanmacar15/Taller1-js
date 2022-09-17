alert('promedio de materia ')

let par1 = parseFloat(prompt('nota del primer parcial'));
let par2 = parseFloat(prompt('nota del segundo parcial'));
let par3 = parseFloat(prompt('nota del tercer parcial'));
let exa = parseFloat(prompt('nota el examen final'));
let tra = parseFloat(prompt('nota del trabajo final'));


let a=((par1+par2+par3)/3)*0.55;
let b=exa*0.30;
let c=tra*0.15;

let cal=a+b+c;

document.getElementById('res').innerHTML = cal;




