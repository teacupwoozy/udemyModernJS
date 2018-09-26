const Hangman = function(word, guessCount, char) {
    this.word = word.toLowerCase().split("")
    this.guessCount = guessCount
    this.lettersGuessed = []
    this.char = char
    this.status = "playing"
}

Hangman.prototype.calcStatus = function(){
    let finished =true

    this.word.forEach((letter) => {
        if (this.lettersGuessed.includes(letter)) {

        } else {
            finished = false
        }
    })

    if (this.guessCount === 0) {
        this.status = "failed"
    } else if (finished) {
        this.status = "finished"
    } else {
        this.status = "playing"
    }
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

    this.calcStatus()
}