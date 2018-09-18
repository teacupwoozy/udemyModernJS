console.log(uuidv4());
// Read existing notes from localStorgage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem("notes")

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return[]
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement("div")
    const textEl = document.createElement("span")
    const button = document.createElement("button")

    // Set up the remove note button
    button.textContent = "x"
    noteEl.appendChild(button)
    
    // Set up the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = "unnamed note"
    }
    noteEl.appendChild(textEl)

    
    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector("#notes").appendChild(noteEl)
    })
}