// const toDo = ["study", "make pie", "dinner date", "buy chocolate", "pack"]
const toDos = [{
    item: "study",
    completed: true
}, {
    item: "make pie",
    completed: true
}, {
    item: "dinner date",
    completed: false
}, {
    item: "buy chocolate",
    completed: true
}, {
    item: "Pack",
    completed: false
}]

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function(paragraph){
    if (paragraph.textContent.includes("The")) {
        paragraph.remove()
    }
})

