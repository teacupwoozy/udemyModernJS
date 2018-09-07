// Multiple arguments
let add = function(a, b, c){
return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = "Anon" , score = 0){
    // return "Name: " + name + " | Score: " + score
    return `Name: ${name} | Score: ${score}`
}

let ScoreText = getScoreText(undefined, 100)
console.log(ScoreText)

// Challenge
// total, tipPercent
// A 25% tip on $40 would be $10
let tipPercent = function(total, tip = .25){
    let totalBill = total * tip + total
    return `A ${tip * 100}% tip on a $${total} bill is $${totalBill}.`
}

let tip = tipPercent(10)
console.log(tip)

