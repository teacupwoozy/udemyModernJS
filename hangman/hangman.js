class Hangman {
    constructor(word, guessCount) {
        this.word = word.toLowerCase().split("")
        this.guessCount = guessCount
        this.lettersGuessed = []
        this.status = "playing"
    }
    calcStatus() {
        const finished = this.word.every((letter) => this.lettersGuessed.includes(letter)|| letter === " ")

        if (this.guessCount === 0) {
            this.status = "failed"
        } else if (finished) {
            this.status = "finished"
        } else {
            this.status = "playing"
        }
    }
    get statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.guessCount}`
        } else if (this.status === "failed") {
            return `Nice try! The word was ${this.word.join("")}.`
        } else {
            return "Great work! You guessed the word!"
        }
    }
    get puzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.lettersGuessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== "playing") {
            return
        }

        if (isUnique) {
            this.lettersGuessed.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.guessCount--
        }

        this.calcStatus()
    }
}