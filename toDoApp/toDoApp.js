"use strict"

let todos = getSavedTodos()

// Set up filters (searchText) and wire up a new filter input to change it.
const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector("#add-todo-form").addEventListener("submit", (e) => {
    e.preventDefault()
    todos.push({
        // item: e.target.elements.newTodo.value,
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    })
    savedTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = "" 
})

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})