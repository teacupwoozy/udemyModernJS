const myFunction = () => {
    const message = "This is my message."
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()