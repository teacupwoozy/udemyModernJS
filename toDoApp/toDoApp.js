// const toDo = ["study", "make pie", "dinner date", "buy chocolate", "pack"]
const toDos = [{
    item: "study",
    category: "school",
    completed: false
}, {
    item: "make pie",
    category: "home",
    completed: true
}, {
    item: "dinner date",
    category: "personal",
    completed: false
}, {
    item: "buy chocolate",
    category: "home",
    completed: true
}, {
    item: "pack",
    category: "personal",
    completed: false
}, {
    item: "write program",
    category: "school",
    completed: false
}]

// Print summary message: "you have # to do's left" into p tag
const incompeteToDos = toDos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement("h2")
summary.textContent = `You have ${incompeteToDos.length} todos left.`
document.querySelector("body").appendChild(summary)

// Print a p for each to do above (use the text value of the object as the text for p)
toDos.forEach(function (todo) {
    const paragraph = document.createElement("p")
    paragraph.textContent = todo.item
    document.querySelector("body").appendChild(paragraph)
})

// List the count for each category


// my own exercise: Print summary of how many items in each category are left to do
