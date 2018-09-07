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

// 1. Convert array to array of objects --> text (strings above), completed (true/false)
// 2. create a function that removes a to do by text value.

const deleteToDo = function (toDos, toDoItem) {
    const index = toDos.findIndex (function (todo) {
        return todo.item.toLowerCase() === toDoItem.toLowerCase()
    })
    if (index > -1){
        toDos.splice(index, 1);
    }
}

deleteToDo(toDos, "Make pie") 
console.log(toDos)