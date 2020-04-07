function tratarErrorELancar(e){
    //throw 10
    //throw '...'
    throw true
}


function imprimirNomeGritado(obj){
    //try é um bloco que provavelmente pode gerar um erro

    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    //o catch serve pra tratar o erro do try
    catch(e){
        tratarErrorELancar(e)
    }
    //Sempre será executado
    
    finally{
        console.log('final')
        
    }

}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

