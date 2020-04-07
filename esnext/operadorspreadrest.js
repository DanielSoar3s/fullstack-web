const funcionario = {nome: 'Maria', salario: 12000};
const clone = {ativo: true ,... funcionario};

console.log(clone);


//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ... grupoA, 'Rafaela'];
console.log(grupoFinal);
