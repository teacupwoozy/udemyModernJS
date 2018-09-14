// const toDo = ["study", "make pie", "dinner date", "buy chocolate", "pack"]
const todos = [{
    item: "study",
    completed: false
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
}, {
    item: "write program",
    completed: false
}]

// Set up filters (searchText) and wire up a new filter input to change it.
const filters = {
    searchText: ""
}
// Create a renderTodos function to render and rerender the latest filtered data.
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.item.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Print summary message: "you have # to do's left" into p tag
    const incompeteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector("#todos").innerHTML = ""

    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompeteTodos.length} todos left.`
    document.querySelector("#todos").appendChild(summary)

    // Print a p for each to do above (use the text value of the object as the text for p)
    filteredTodos.forEach(function (todo) {
        const paragraph = document.createElement("p")
        paragraph.textContent = todo.item
        document.querySelector("#todos").appendChild(paragraph)
    })
}

renderTodos(todos, filters)

document.querySelector("#search-text").addEventListener("input", function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// document.querySelector("#name-form").addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ""
// })

document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault()
    todos.push({
        item: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = "" 
})

