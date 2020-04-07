const notas = [ 6.5 , 7.0 , 3.2 , 9.0 , 4.0 , 10.0 ]
//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7 ) {
        notasBaixas.push(notas[i])
        
    }
}

console.log(notasBaixas);

//Com CALLBACK
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
    
})

console.log(notasBaixas2);


//callback com arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3);
