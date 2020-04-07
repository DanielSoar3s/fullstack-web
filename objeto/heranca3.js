const pai = { nome: ' daniel', corDoCabelo:'preto'}

const filha1 = Object.create(pai);

console.log(filha1.corDoCabelo);
filha1.nome = 'ana'
filha1.corDoCabelo = 'rosa'
console.log(filha1);

//pelo prototipo eu posso mudar o nome
const filha2 = Object.create(pai,{
    nome:{value: 'Bia',writrable: false,enumerable:true}
});
//aqui não posso
console.log(filha2.nome)
filha2.nome = 'carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`);


console.log(Object.keys(filha1));

console.log(Object.keys(filha2));

for(let key in filha2) {
    //saber se o atributo veio por herança ou se pertence ao própio objeto
   filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por heranca ${key}`)
    
}
