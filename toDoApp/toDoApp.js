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


// Listen for add to do text change.
document.querySelector("#new-todo").addEventListener("input", function(e){
    console.log(e.target.value)
})
// Listen for new to do creation.
document.querySelector("#add-todo").addEventListener("click", function(){
    console.log("To Do button clicked!")
})

document.querySelector("#search-text").addEventListener("input", function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})