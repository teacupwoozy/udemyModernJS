const Hangman = function(word, guessCount, char) {
    this.word = word.toLowerCase().split("")
    this.guessCount = guessCount
    this.lettersGuessed = ["c", "d"]
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
try1.makeGuess("c")
try1.makeGuess("t")
try1.makeGuess("z")
console.log(try1.getPuzzle())
console.log(try1.guessCount)

const try2 = new Hangman("beep beep", 2)
try2. makeGuess("b")
try2. makeGuess("r")
console.log(try2.getPuzzle())
console.log(try2.guessCount)
