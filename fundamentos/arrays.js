const valores = [7.7, 8.2, 9.4, 7.1]
console.log(valores[0],valores[3])
console.log(valores[4]);

valores[4]=10
console.log(valores)
//mostra todo o array
console.log(valores.length)
//push adciona novos valores ao array
valores.push({id:3},'teste',null,false)
console.log(valores)
//Aqui ele retira o ultimo valor do array
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores);







