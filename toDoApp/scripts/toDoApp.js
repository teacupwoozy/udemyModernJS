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
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault()

    if(text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        savedTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.newTodo.value = "" 
    } 
    
    
  
})

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})