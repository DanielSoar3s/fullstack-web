function getPreco(imposto = 0,moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome:'notebook',
    preco: 2000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

const carro = { preco: 2000, desc: 0.15}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro));



console.log(getPreco.call(carro,0.15,'$'));
console.log(getPreco.apply(global, [0.15,'$']));




 