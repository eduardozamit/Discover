// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 345.33452345

//Este códgio ira fixar o número maximo de digitos após a virgula em 2, e trocar o ponto por vírgula (Ao ser feito isto o numero deixa de ser um Number e passsa a ser uma String)
console.log(number.toFixed(2).replace(".", ","))