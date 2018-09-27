class Person {
    constructor(firstName, lastName, age, likes) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade

    }
    getBio() {
        const status = this.grade >= 70 ? "passing" : "failing"
        return `${this.firstName} is ${status} the class.`

        // if(this.grade >= 70) {
        //     return `${this.firstName} is passing the class.`
        // } else {
        //     return `${this.firstName} is failing the class.`
        // }
    }
    updateGrade(pointChange) {
        this.grade += pointChange
    }
}


const person3 = new Student ("Monsi", "Ramirez", 34, "not taking any bullshit", 99)
console.log(person3.getBio())
person3.updateGrade(-40)
console.log(person3.getBio())


// const me = new Employee ("Donna", "Washington", 57, "Slayer", ["reading", "kicking ass"])
// me.setName("Sophie Scholl")
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person("Denise", "Jones", 32, [])
// console.log(person2.getBio())