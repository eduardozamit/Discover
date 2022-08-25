/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name
}
const eduardo = new Person ('duds')
const yasmin = new Person ('yaxmin')
console.log(eduardo)
console.log(yasmin)