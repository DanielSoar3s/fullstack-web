const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    let dobro = e * 2
    return dobro;
})

console.log(resultado);

let dobro = resultado;

let resultado1 = dobro.map(function(e){
    return e * 2
})

console.log(resultado1);
console.log(nums);

