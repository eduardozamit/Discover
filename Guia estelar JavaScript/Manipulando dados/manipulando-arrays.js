// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("react")
// Adicionar no começo
techs.unshift("sql")
// Remover do fim
techs.pop()
// Remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf("css")


console.log(techs)