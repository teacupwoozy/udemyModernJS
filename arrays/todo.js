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

// get list of toDos that have completed value of false.
// his way
const getThingsToDo = function (toDos){
    return toDos.filter(function (todo){
        return !todo.completed
    })
}
// console.log(getThingsToDo(toDos, false))

// my way - but doesn't store in a variable
function isFalse(todo){
    return todo.completed === false
}
// console.log(toDos.filter(isFalse))

// sorts list so that completed items are moved to the bottom of the array.
const sortTodos = function(toDos){
    toDos.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(toDos)
console.log(toDos)

// deleteToDo(toDos, "Make pie") 
// console.log(toDos)