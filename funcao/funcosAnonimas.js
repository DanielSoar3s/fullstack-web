const soma = function (a,b) {
    return a + b
}

const imprimirResultado = function( a, b, operacao = soma ){
    console.log(operacao(a,b));    
}

imprimirResultado(4,3)
imprimirResultado(3,4,soma)
imprimirResultado( 3, 4, function(x,y){
    return x - y
})
imprimirResultado( 3, 4, (a,b) => a*b )

const pessoa = {
    falar: function(){
        return 'OLA'
    }
}


 console.log(pessoa.falar());