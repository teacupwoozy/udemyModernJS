// let num = 1313.1341

// console.log(num.toFixed(2))
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


// Challenge
// Create a function that takes in a person's guess
// Generate random number in a given range and check of there guess was correct
// between 1-5 return true if correct, otherwise false.



let makeGuess = function(guess){
    // Old, longer way
    // if(randomNum === guess){
    //     console.log(true)
    // }else {
    //     console.log(false)
    // }
    // More efficient method:
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}

console.log(makeGuess(5))
// console.log(randomNum)