// Students score, total possible score
// Generate letter grade and percentage
// ie: You got a C (75%)
// 


const testInputs = function(score, possible) {
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
//     if(studentScore >= 90){
//         return `You earned an A (${studentScore}%)`
//     } else if(studentScore >= 80) {
//         return `You earned a B (${studentScore}%)`
//     } else if (studentScore >= 70) {
//         return `You earned a C (${studentScore}%)`
//     } else if (studentScore >= 60) {
//         return `You earned a D (${studentScore}%)`
//     } else {
//         return `You earned an F (${studentScore}%)`
//     }
// }
// Call the function
const grade = testInputs(85, 100)
// Print the string
console.log(grade)

