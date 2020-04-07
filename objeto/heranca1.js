const ferrari = {
    modelo:'a40',
    velocidadeMaxima:250,
}

const volvo = {
    modelo:'v40',
    velocidadeMaxima:220,
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);


function meuObjeto () {}

console.log( typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);


