// create an array of 5 to do's
// print message that includes length ("you have # to do's")
// print first and second to last items in the terminal (with formatting)

// Delete the third item
// Add new item onto the end
// Remove the first item from the list

const toDo = ["study", "make pie", "dinner date", "buy chocolate", "pack"]


toDo.splice(2, 1)
toDo.push("100 cartwheels")
toDo.shift()

console.log(`You have ${toDo.length} things to do.`)

// print all of the items left to do (ie: 1. dhfksdh 2. kdhfkjs)
toDo.forEach(function(item, index){
    console.log(`${index + 1}. ${item} `)
})

// print items using for loop
// for(let i = 0; i < toDo.length; i++){
//     console.log(`${i + 1}. ${toDo[i]} `)
// }