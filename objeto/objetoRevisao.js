//coleção dinamica de chaves pares valor
//posso dizer que uma varivel vai receber um objeto,assim se torna um objeto.
const produto = new Object
produto.nome = 'Daniel'
produto['marca do produto'] = 'Generica'

produto.preco = 220

console.log(produto);

delete produto.preco
delete produto.nome
console.log(produto);

const carro = {
    modelo:'142A',
    valor:20000,
    propietario: {
        nome: 'valdomiro',
        idade:18,
        endereco:{
            rua:"severino vasconcelos",
            bairo:'campo velho',
            numero:07,
        }
    },
    condutores:[{
        nome:'zezim',
        idade:76,
    }, {
        nome:'ana',
        idade:42,

    }],

    calcularValorSeguro: function(){

    }

}

carro.propietario.endereco.numero = 1000
console.log(carro);
carro.propietario.endereco.rua = 'rua chicotada'
console.log(carro.propietario.endereco.rua);
