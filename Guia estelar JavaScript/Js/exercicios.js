// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
// R. é undefined pois eu não dei nenhum dado para está variável, (também é possivel utilizar o código abaixo para descobrir)
//{
//    console.log(typeof weight)
//}

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSubscribed: Boolean

{
    let name = "Eduardo"
    let age = 20
    let stars = 4.8
    let isSubscribed = true
}

*/

/*
    4. A variável student abaixo é de que tipo de dado?
    R. Object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        atenção, substitua <names> <age> e <weight> pelos valores de cada propriedade do objeto

*/

let student = {
    name: "Duds",
    age: 20,
    weight: 78.8,
    stars: 4.8,
    isSubscribed: true

};

//console.log(`${student.name} de idade ${student.age} pesa ${student.//weight} kg.`)



/*
    5. Declare uma variável do tip array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [
   student,
]

//console.log(students)

/*
    7. Coloque no console o valor da posição zero do array acima
*/

//console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

let student1 = {
    name: "Yasmin",
    age: 21,
    weight: 89.8,
    stars: 4.9,
    isSubscribed: false

};

students[1] = student1

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
*/

console.log(a)
var a = 1