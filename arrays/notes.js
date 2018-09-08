const notes = [ {
    title: "My next trip",
    body: "I'd like to go to Spain"
}, {
    title: "New habits",
    body: "moar veggies, moar coding"
}, {
    title: "Office mods",
    body: "get an office"
}]

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query){
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })

}

console.log(findNotes(notes, "moar"))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, "Office mods")
console.log(note)
