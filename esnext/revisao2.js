//Arrow function

const soma = (a,b) => a + b;
console.log(soma(2,4));

//Arrow function(this)

const lexico1 = () => console.log(this=== exports);

//parametro default
function log(texto = 'Node') {
    console.log(texto);
}

//operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}
console.log(2, 3, 4, 5);

