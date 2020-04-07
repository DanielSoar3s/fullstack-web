const pessoa = { nome: ' maria',}
pessoa.nome = 'ana'
console.log(pessoa);


//vai da erro pois estou tentando mudar a constante,e não o atributo do objeto armazenado na constante
//pessoa = {nome: 'zezim'}

//metodo para congelar a constante,nao deixa ser modificada,nem excluida
Object.freeze(pessoa)

const pessoaConstante = Object.freeze({nome: "daniel"})
console.log(pessoaConstante);


