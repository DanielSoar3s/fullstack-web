const produtos = [
    {nome: " Notebook ", preço: 2499, fragil: true},
    {nome: ' Ipad Pro ', preço: 4199, fragil: true},
    {nome: " Copo de vidro ", preço: 12.50, fragil: true},
    {nome: " Copo de Plástico ", preço: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}));


const caro = produto => produto.preço >= 500

const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil));


