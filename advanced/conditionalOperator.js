// const myAge = 7
// const message = myAge >= 18 ? "You can vote!" : "You cannot vote yet"
// console.log(message)

const myAge = 20
const showPage = () => {
    return "Showing the page"
}
const showErrorPage = () => {
    return "Showing the error page"
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)