// For...in

let person = {
    name: 'Duds',
    age: 20,
    weight: 78.8,

}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}