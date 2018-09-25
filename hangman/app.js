const product = {
    name: "The Power"
}

// garbage examples that I don't know why we're having this conversation... ug.
// const product = new Object()
// product.name = "You Don't Know JS"

// const product = new Object({
//     name: "Persuasion"
// })

Object.prototype.someNewMethod = () => "This is garbage"

console.log(product.someNewMethod())
console.log(product)