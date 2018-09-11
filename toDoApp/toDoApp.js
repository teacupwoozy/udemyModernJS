// const toDo = ["study", "make pie", "dinner date", "buy chocolate", "pack"]
const toDos = [{
    item: "study",
    completed: true
}, {
    item: "make pie",
    completed: true
}, {
    item: "dinner date",
    completed: false
}, {
    item: "buy chocolate",
    completed: true
}, {
    item: "pack",
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