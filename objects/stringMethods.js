let name = " Stacy Montemayor "

// length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
let password = "abc123sdlkfnlskdf"
console.log(password.includes("password"))

// Trim method
console.log(name.trim())

// Challenge: create function isValidPassword
// length > 8 and doesn't contain word "password"
let isValidPassword = function(password){
    if (password.length <= 8 || password.includes("password")){
        console.log("Does not meet password requirements.")
    } else {
        console.log("Password accepted!")
    }
}
    
    

console.log(isValidPassword("fdkkg"))
console.log(isValidPassword("fdkkgdskf7787"))
console.log(isValidPassword("fdkkgpasswordksdjfk"))