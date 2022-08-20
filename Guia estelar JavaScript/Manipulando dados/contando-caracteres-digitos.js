// Mnipulando Strigns e Números


// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)


let number = 1234

// O resultado será undefined pois o number não recebe lenght
console.log(number.length)

//pórem se você trocar do tipo number para string irá funcionar corretamente
console.log(String(number).length)