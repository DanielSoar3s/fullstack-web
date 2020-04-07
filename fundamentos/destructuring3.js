function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
    
}
//console.log(rand({min : 10 , max : 20}))
const Obj ={
    min:10,
    max:20
}
console.log(rand(Obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())
