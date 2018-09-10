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

// DOM Document Object Model

// query and remove first <p> tag in html file
// const p = document.querySelector("p")
// p.remove()

// Query all and remove
const ps = document.querySelectorAll("p")

// do different things with those selected elements
ps.forEach(function(p){
    p.textContent = "**ck"
    // console.log(p.textContent)
    // p.remove()
})

// Add a new element
const newParagraph = document.createElement("p")
newParagraph.textContent = "This is a new element from javascript."
document.querySelector("body").appendChild(newParagraph)