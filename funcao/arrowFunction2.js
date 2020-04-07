function pessoa() {
    this.idade = 0

    setInterval(() => {

        this.idade++
        console.log(this.idade);
        
    }, 1000);
}

new pessoa


//Função arrow aceita o this,diferente de uma função padrão