let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"
console.log(`${myBook.title} by ${myBook.author}`)

// Create object with: name, age, location
let user = {
    name: "Angela",
    age: 39,
    location: "Seattle"
}

// Create string about the person
console.log(`${user.name} is ${user.age} years old and lives in ${user.location}. `)
// Increase age by 1 and print new message
user.age = user.age + 1
user.location = "Kailua"
console.log(`${user.name} is ${user.age} years old and lives in ${user.location}. `)
