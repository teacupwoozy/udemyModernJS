let notes = getSavedNotes()

const filters = {
    searchText: "",
    sortBy: "byEdited"
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function(e){
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: "",
        body: "",
        createdAt: timestamp,
        updatedAt: timestamp
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
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener("storage", function(e){
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

// const now = moment()
// now.subtract(1, "week").subtract(20, "days")
// console.log(now.format("MMMM Do, YYYY"))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())


// const birthday = moment()
// birthday.year(2001).month(7).date(1)

// console.log(birthday.format("MMM D YYYY"))


