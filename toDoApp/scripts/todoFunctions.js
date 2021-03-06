"use strict"

// get existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem("todos")

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

// get savedTodos
const savedTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// render the todos
let renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    
        return searchTextMatch && hideCompletedMatch
    })

    // Print summary message: "you have # to do's left" into p tag
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector("#todos").innerHTML = ""
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))

    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            document.querySelector("#todos").appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement("p")
        messageEl.classList.add("empty-message")
        messageEl.textContent = "No to dos to show."
        document.querySelector("#todos").appendChild(messageEl)
    }
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo){
        todo.completed = !todo.completed
    }
}

// Get DOM element for individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("label")
    const containerEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener("change", () => {
        toggleTodo(todo.id)
        savedTodos(todos)
        renderTodos(todos, filters)
    })
    
    // Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Set up container
    todoEl.classList.add("list-item")
    containerEl.classList.add("list-item__container")
    todoEl.appendChild(containerEl)

    // Set up remove button
    removeButton.textContent = "🙅🏽‍♀️"
    // can change aboveemoji to "remove"
    removeButton.classList.add("button", "button--text")
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", function(){
        removeTodo(todo.id)
        getSavedTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM element for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    summary.classList.add("list-title")
    if(incompleteTodos.length === 1) {
        summary.textContent = `You have ${incompleteTodos.length} todo left.`
    } else {
        summary.textContent = `You have ${incompleteTodos.length} todos left.`
    }
    return summary
}