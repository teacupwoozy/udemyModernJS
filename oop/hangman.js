const Hangman = function(word, guesses) {
    this.word = word
    this.guesses = guesses
}

const try1 = new Hangman("meow", 4)
console.log(try1)

const try2 = new Hangman("beepbeep", 5)
console.log(try2)