const pilotos = ["senna", "Prost", "Schumacher", "Hamilton"]

// a idexação (index) começa pelo numero 0
console.log(pilotos[0])

// iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elemento
pilotos.push("Alonso")
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto == "senna")
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos)