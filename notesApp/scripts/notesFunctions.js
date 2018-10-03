"use strict"

// Read existing notes from localStorgage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    try {
        return notesJSON ? JSON.parse(notesJSON) : []        
    } catch (error) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement("a")
    const textEl = document.createElement("p")
    const statusEl = document.createElement("p")
    // const button = document.createElement("button")

    // // Set up the remove note button
    // button.textContent = "x"
    // noteEl.appendChild(button)
    // button.addEventListener("click", () => {
    //     removeNote(note.id)
    //     getSavedNotes(notes)
    //     renderNotes(notes, filters)
    // })
    
    // Set up the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = "unnamed note"
    }
    textEl.classList.add("list-item__title")
    noteEl.appendChild(textEl)

    noteEl.setAttribute("href", `/edit.html#${note.id}`)
    noteEl.classList.add("list-item")

    // set up status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add("list-item__subtitle")
    noteEl.appendChild(statusEl)
    
    return noteEl
}

// Sort notes by ne of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === "byEdited"){
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byCreate"){
        return notes.sort((a, b) => {
            if (a.createdAt > b. createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "alphabetical") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML = ""

    if(filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
            const emptyMessage = document.createElement("p")
            emptyMessage.textContent = "No notes to show."
            emptyMessage.classList.add("empty-message")
            notesEl.appendChild(emptyMessage)
    }
}

// generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`