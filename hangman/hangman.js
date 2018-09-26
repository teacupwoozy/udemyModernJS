const Hangman = function(word, guessCount, char) {
    this.word = word.toLowerCase().split("")
    this.guessCount = guessCount
    this.lettersGuessed = []
    this.char = char
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.lettersGuessed.includes(letter) || letter === " ") {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(isUnique){
        this.lettersGuessed.push(guess)
    }
    if(isUnique && isBadGuess){
        this.guessCount--
    }
}

const try1 = new Hangman("cat", 4)
console.log(try1.getPuzzle())
console.log(try1.guessCount)

window.addEventListener("keypress", function(e){
    const guess = String.fromCharCode(e.charCode)
    try1.makeGuess(guess)
    console.log(try1.getPuzzle())
    console.log(try1.guessCount)
})
