const pessoa = {
    nome:'Daniel',
    idade:15,
    endereço:{
        logradouro:'rau bb',
        numero:10
    }
}
const {nome,idade}= pessoa
console.log(nome,idade);

const {nome: n ,idade: i } = pessoa
console.log(n,i);

const {sobrenome,humor=true}=pessoa
console.log(sobrenome,humor);

const {endereço:{logradouro,numero,cep}}=pessoa
console.log(logradouro,numero,cep);

const {conta:{ag,num}}=pessoa
console.log(ag,num);



