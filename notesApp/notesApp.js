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

window.addEventListener("storage", function(e){
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date("October 1 2018 12:00:00")
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}