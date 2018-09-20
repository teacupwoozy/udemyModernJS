let notes = getSavedNotes()

const filters = {
    searchText: ""
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function(e){
    const id = uuidv4()
    notes.push({
        id: id,
        title: "",
        body: ""
    })
    // localStorage.setItem("notes", JSON.stringify(notes))
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector("#search-text").addEventListener("input", function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function(e){
    console.log(e.target.value)
})