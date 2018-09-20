const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}
console.log(square(5))

const people = [{
    name: "Andrew",
    age: 27
}, {
    name: "Anita",
    age: 61
}, {
    name: "Jess",
    age: 42
}]

// const under30 = people.filter(function(person){
//     return person.age < 30 
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// const is27 = people.filter(function(person){
//     return person.age === 27
// })
const is27 = people.filter((person) => person.age === 27)
console.log(is27)