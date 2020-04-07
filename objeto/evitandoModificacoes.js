//Object.preventExtesions


//Só deixa modificar os atributos,deletar mas não deixa adcionar

const produto = Object.preventExtensions ({
    nome:'quaquer',preço:1.99,tag:'promocao'
})

produto.nome = 'daniel'
produto.descricao = 'mirante'// nao deixou
delete produto.tag
console.log(produto);


//so deixa modificar,mas não deixa deletar nem add
const pessoa = {nome: 'juliane',idade:19}

Object.seal(pessoa)

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);


//object.freeze não deixa fazer nada