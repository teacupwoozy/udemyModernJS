const createCounter = () => {
    let count = 0


    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
    
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())


// adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const addTen = createAdder(10)
console.log(addTen(-2))
console.log(addTen(20))
const add100 = createAdder(100)
console.log(add100(-90))



// tipper
const createTipper = (tip) => {
    return (bill) => {
        return tip * bill
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.2)
console.log(tip15(100))
console.log(tip20(100))