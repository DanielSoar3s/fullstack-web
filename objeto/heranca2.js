Object.prototype.attr0 = 0
const avo = {attr1: 'a'}
const pai = {__proto__ : avo, attr2: 'b',attr3:'c'}
const filho = {__proto__ : pai,attr3: 'c'}

console.log(filho.attr0,filho.attr2,filho.attr1,filho.attr3);


const carro = {
    velocidadeAtual : 0,
    velocidadeMaxima : 200,
    acelerarMais(delta) {
        if(this.velocidadeAtual + delta < velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeAtual + delta;
        }
        else {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },

    status() {
        return `${this.velocidadeAtual}KM/H de ${this.velocidadeMaxima}`
    }
}

const ferrari = {
    modelo: 'v40',
    velocidadeMaxima:340,
}


const volvo = {
    modelo:'a40',
    status() {
        return `${this.modelo}: ${this.status} `
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(300)
console.log(volvo.status());







