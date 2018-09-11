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
    item: "Pack",
    completed: false
}]

// Print summary message: "you have # to do's left" into p tag
const toDoCount = document.createElement("p")
toDoCount.textContent = `You have ${toDos.length} items left to do!`
document.querySelector("body").appendChild(toDoCount)

// Print a p for each to do above (use the text value of the object as the text for p)
toDos.forEach(function (p) {
    const toDoItem = document.createElement("p")
    // toDoItem.textContent = `${toDos.item}`
    toDoItem.textContent = toDos.item
    // p.innerHTML = toDos[item]
    document.querySelector("body").appendChild(toDoItem)
})


