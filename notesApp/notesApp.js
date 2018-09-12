const notes = [{
    title: "My next trip",
    body: "I'd like to go to Spain"
}, {
    title: "New habits",
    body: "moar veggies, moar coding"
}, {
    title: "All the office mods",
    body: "get an office"
}]

document.querySelector("#create-note").addEventListener("click", function(e){
    e.target.textContent = "The button was clicked."
})

document.querySelector("#remove-all").addEventListener("click", function(){
    document.querySelectorAll(".note").forEach(function(note){
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", function(e){
    console.log(e.target.value)
})