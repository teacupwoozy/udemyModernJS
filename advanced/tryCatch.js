const getTip = (amount) => {
    if (typeof amount === "number"){
        return amount * .25
    } else {
        throw "Argument must be a number."
    }
}

const result = getTip(2)
console.log(result)