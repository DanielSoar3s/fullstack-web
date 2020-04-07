const pilotos = ['vettel','alonso','heikkonen','massa']
//retira o ultimo array
pilotos.pop()
console.log(pilotos);

//adciona ao array
pilotos.push('verrstappe')
console.log(pilotos);

//remove o primeiro
pilotos.shift()
console.log(pilotos);

//adciona no primeiro elemento
pilotos.unshift('hamilton')
console.log(pilotos);

pilotos.splice(2,0,'botas','massa')
console.log(pilotos);


pilotos.splice(3,1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)//cria novo array
console.log(algunsPilotos1);

//nao entra o 4
const alagunsPilotos2 = pilotos.slice(1,4)
console.log(alagunsPilotos2);

