// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero ser o melhor!"

// Este código separa a String com base no que você escolher e tranforma a String em Array
let myArray = phrase.split(" ")

console.log(myArray)

// Este código junta a Array em String e coloca algo entre elas, como no explo foi colocado um underline.
let phraseWithUnderScore = myArray.join("_")

console.log(phraseWithUnderScore)