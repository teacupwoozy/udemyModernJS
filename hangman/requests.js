// Making an HTTP request
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback("An errror has taken place", undefined)
        }
    })

    request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3")
    request.send()
}