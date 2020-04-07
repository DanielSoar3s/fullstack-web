console.log(module.exports === this);

console.log(module.exports === exports);

this.a = 1
exports.b =2
module.exports.c = 3

console.log(module.exports);

exports = {
    nome: 'Daniel'
}
console.log(module.exports);

//Forma certa de adcionar

module.exports = {
    nome: 'Daniel'
}

console.log(module.exports);

