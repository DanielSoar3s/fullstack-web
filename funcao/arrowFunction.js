let soma = function (a) {
    return 2 * a
}

soma = (a) => {
    return 2 * a
}

soma = a => 2 * a//retorno implicito
console.log( soma(Math.PI));


let ola = function () {
    return 'olá'
}

ola = () => 'ola'

ola = _ => 'ola'//possui um param
console.log(ola());

