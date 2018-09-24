const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person("Donna", "Washington", 57)

console.log(me)


const person2 = new Person("Denise", "Jones", 32)
console.log(person2)