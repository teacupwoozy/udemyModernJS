let convert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)

    if(celsius <= 0){
        let isFreezong = true
    }

    return celsius
}

let newTemp1 = convert(68)
let newTemp2 = convert(32)

console.log(newTemp1)
console.log(newTemp2)