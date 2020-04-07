
//NOTAÇÃO LITERAL
const obj1 = {}
console.log(obj1);
//função em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2);

//funções construtoras

function Produto(nome,preco,desconto){
    this.nome = nome;
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('celular',2000,0.10)
const p2 = new Produto('noteboook',3000,0.10)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto());


//funcao factory

function criarFuncionario(nome,salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,

        getSalario() {
            return (salarioBase/30) * (30 - faltas);
        }
    }
}

const f1 = new criarFuncionario('daniel',5000,2)
const f2 = new criarFuncionario('Ze',5000,10)

console.log(f1.getSalario(),f2.getSalario());

//object.create

const filha = Object.create(null)

filha.nome = 'ana'
console.log(filha);


