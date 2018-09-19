// get existing todos from localStorage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem("todos")

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// get savedTodos
const savedTodos = function(todos){
    localStorage.setItem("todos", JSON.stringify(todos))
}

// render the todos
let renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    
        return searchTextMatch && hideCompletedMatch
    })

    // Print summary message: "you have # to do's left" into p tag
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector("#todos").innerHTML = ""
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))

    // Print a p for each to do above (use the text value of the object as the text for p)
    filteredTodos.forEach(function (todo) {
        document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })
}

// Remove todo by id
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}


// check checkbox if todo is true

// Get DOM element for individual todo
const generateTodoDOM = function(todo){
    const todoEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const removeButton = document.createElement("button")

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    

    // Setup todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Set up remove button
    removeButton.textContent = "🙅🏽‍♀️"
    todoEl.appendChild(removeButton)
    removeButton.addEventListener("click", function(){
        removeTodo(todo.id)
        getSavedTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM element for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}