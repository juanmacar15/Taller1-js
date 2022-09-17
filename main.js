alert('promedio estudiante ')
alert('porfavor ingresar las notas de 1 a 5 ')

let exa1 = parseFloat(prompt('ingrese la nota del primer examen'));
let exa2 = parseFloat(prompt('ingrese la nota del segundo examen'));
let exa3 = parseFloat(prompt('ingrese la nota del tercer examen'));
let exa4 = parseFloat(prompt('ingrese la nota del cuarto examen'));

if (exa1<=5 && exa2<=5 && exa3<=5 && exa4<=5){

    let pro=(exa1+exa2+exa3+exa4)/4;

    document.getElementById('nota').innerHTML = pro;

}
else{
    alert('porfavor ingrese las notas de 1 a 5')
}






