//Function expression
//Function anonymous

//Parameters (Parâmetros)
const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2, 3) // Arguments (Argumentos)

//Função é um liquidificador

function fazerSuco(fruta0, fruta1){
    return "suco de: " + fruta0 + fruta1
}

const copo = fazerSuco ("banana", "morango")

console.log(copo)