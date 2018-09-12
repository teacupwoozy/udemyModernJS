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

document.querySelector("button").addEventListener("click", function(e){
    e.target.textContent = "The button was clicked."
})