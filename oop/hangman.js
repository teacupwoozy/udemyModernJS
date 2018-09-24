const Hangman = function(word, guessCount, letterGuessed) {
    this.word = word.toLowerCase().split("")
    this.guessCount = guessCount
    this.letterGuessed = ["e", "b"]
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""

    this.word.forEach((letter) => {
        if (this.letterGuessed.includes(letter) || letter === " ") {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    })

    return puzzle
}

const try1 = new Hangman("MEOW", 4, ["a", "b", "c"])
console.log(try1.getPuzzle())

const try2 = new Hangman("beepbeep", 5, [])
console.log(try2.getPuzzle())