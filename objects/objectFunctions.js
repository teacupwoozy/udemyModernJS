let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pageCount: 360
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Convert F to C and K
// Create function and take F in
// let temps = {
//     fahrenheit: undefined,
//     celsius: undefined,
//     kelvin: undefined
// }

// temps.fahrenheit = 32
// temps.celsius = (temps.fahrenheit - 32) * (5 / 9)
// temps.kelvin = (temps.fahrenheit + 459.67) * (5 / 9)

// console.log(`${temps.fahrenheit}F equals ${temps.celsius}C and ${temps.kelvin}k. `)


// Now, with a function
let moarTemps = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}
let conversions = moarTemps(32)
console.log(conversions)
console.log(`${conversions.fahrenheit}F equals ${conversions.celsius}C and ${conversions.kelvin}k. `)
// Return object with all three