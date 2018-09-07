let greetUser = function(){
    console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Convert farenheit to Censius
let convert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

let newTemp = convert(68)
console.log(newTemp)