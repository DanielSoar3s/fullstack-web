function soma(){
    const x = 2;
    const y = 2;
    return x + y
}
const s = soma();
console.log(s);


//function declaration
function somar(a,b){
    return a + b
}

console.log(somar(2,2));
//function expression
const sub = function (x,y){
    return x - y
}
//named function expression
const mult = function mult(c,d){
    return c * d
}


//se eu chamar a function declaration antes dela,dá certo;As outras,não.