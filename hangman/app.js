const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
const try1 = new Hangman("cat", 4)

puzzleEl.textContent = try1.getPuzzle()
guessesEl.textContent = try1.getStatusMsg()

window.addEventListener("keypress", function (e) {
    const guess = String.fromCharCode(e.charCode)
    try1.makeGuess(guess)
    puzzleEl.textContent = try1.getPuzzle()
    guessesEl.textContent = try1.getStatusMsg()

})
