// Students score, total possible score
// Generate letter grade and percentage
// ie: You got a C (75%)
// 


const testInputs = function(score, possible) {
    if (typeof score !== "number" || typeof possible !== "number") {
        throw Error ("Argument must be a number")
    }

    const studentScore = (score / possible) * 100
    let letterGrade = ""

    if (studentScore >= 90) {
        letterGrade = "A"
    } else if (studentScore >= 80) {
        letterGrade = "B"
    } else if (studentScore >= 70) {
        letterGrade = "C"
    } else if (studentScore >= 60) {
        letterGrade = "D"
    } else {
        letterGrade = "F"
    }
    return `You earned a ${letterGrade} (${studentScore}%)`
} 
// try catch
try {
    // Call the function
    const grade = testInputs(85, 100)
    // Print the string
    console.log(grade)
} catch (e) {
    console.log(e.message)
}