let valor //nao inicializada
console.log(valor);
valor = null//ausencia de valor e endereço
console.log(valor);
//console.log(valor.toString());//erro

const produto = {}
console.log(produto.preco);

produto.preco=3.50
console.log(produto);

produto.preco = undefined //nao faca isso
console.log(!!produto.preco);

//delete produto.preco

console.log(produto);

produto.preco = null
console.log(!!produto.preco);
console.log(produto);




