// Making an HTTP request
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to get puzzle.")
    }
}

const getCountry = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error("There was an oopsie.")
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode))
}

const getLocation = () => {
    return fetch(`http://ipinfo.io/json?token=cb2d5d7f3d96d9`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error("Yipes stripes! There was an error.")
        }
    })
}