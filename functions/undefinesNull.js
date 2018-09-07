// Undefined for variable
let name = "Jen"

if(name === undefined) {
    console.log("Please provide a name")
} else {
    console.log(name)
}

// Undefined for function arguements
// Undefined as function return default value
let square = function(num){
    console.log(num)
}

let results = square()
console.log(results)

// Null as assigned value
let age = 27

age = null

console.log(age)